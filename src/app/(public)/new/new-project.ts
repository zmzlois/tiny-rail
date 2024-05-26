import { Dispatch } from "react";
import type { ProjectCommandProps, CommandItems } from "@/app/(public)/new/_components/project-command"
import { Endpoints } from "@octokit/types";
import { getUserRepos } from "@/server/github";
import getTemplatesFromRailway from "@/server/projects";
import { QueryTemplatesConnectionEdge } from "@/lib/api";
import { createService } from "@/server/service";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { CustomError } from "@/lib/error";
import { DatabaseSource } from "@/lib/constants";

type GithubRepo = Endpoints["GET /user/repos"]["response"]["data"][0];

export const newProject: ProjectCommandProps = {

    placeholder: "Deploy a new project by typing...",
    items: [
        {
            title: "Deploy from Github repo",
            action: "github",
        },
        {
            title: "Deploy from templates",
            action: "templates",
        },
        {
            title: "Deploy Postgres",
            action: "postgres",
            image: "ghcr.io/railwayapp-templates/postgres-ssl:latest",
        },
        {
            title: "Deploy Redis",
            action: "redis",
            image: "bitnami/redis",
        },
        {
            title: "Deploy MySQL",
            action: "mysql",
            image: "mysql",
        },
        {
            title: "Deploy MongoDB",
            action: "mongodb",
            image: "mongo",
        },
    ],
};


export function handleGithub(
    setProjects: Dispatch<ProjectCommandProps>,
    username: string,
    projectId: string | null
) {
    const commandItem = {
        title: "Select a Github repo",
        placeholder: "Search for a Github repo...",
        items: [] as CommandItems[],
    };


    getUserRepos(username).then((data) => {
        data.map((repo) => {
            const title = repo.clone_url!.split(".com/")[1].replace(".git", "");


            commandItem.items.push({
                title: title,
                action: title,
                repoUrl: repo.full_name,
                branch: repo.branch,
            });
        });
        setProjects(commandItem);
    });




}

export function handleTemplates(
    setProjects: Dispatch<ProjectCommandProps>,
    projectId: string | null

) {
    const commandItem = {
        title: "Select a template",
        placeholder: "Search for a template...",
        items: [] as CommandItems[],
    };



    try {

        getTemplatesFromRailway().then((data) => {

            data.map((template) => {

                commandItem.items.push({
                    code: template.node.code,
                    title: template.node.metadata.name,
                    description: template.node.metadata.description,
                });
            });
            setProjects(commandItem);

        });

    } catch (error) {
        console.error("[handleTemplates]:", error);
    }


}

export function handleDatabase(item: CommandItems, setProjects: Dispatch<ProjectCommandProps>, projectId: string | null) {

    setProjects("creating");


    const name = item.title.split(" ").pop()! as DatabaseSource

    toast.info("Trying to deploy " + name + "...");



    try {
        return createService({ source: { source: item.image, type: "image", name }, projectId }).then((data) => {

            if (!data) {
                toast.error("Failed to deploy " + name);
                return;
            }

            if (!data.projectId || !data.id) {
                toast.error("Failed to deploy " + name);
                return;
            }

            toast.success("Deployed " + name + " successfully");
            return redirect(`/project/${data.projectId}/service/${data.id}`);
        })
    } catch (error) {
        console.error("[handleDatabase]:", error);

        setProjects(newProject)

        toast.error("Failed to deploy " + item.title + "\n Please try again later.");
    }


}

export function handleRepoDeploy(item: CommandItems, projectId: string | null) {

    console.table(item);

    if (!item.repoUrl) throw new CustomError("No repoUrl provided");


    const sourceUrl = item.repoUrl?.includes(".git") ? item.repoUrl.replace(".git", "") : item.repoUrl;

    toast.info("Trying to deploy " + item.title + "...");

    createService({ source: { source: sourceUrl, branch: item.branch ?? "main", name: item.title, type: "repo" }, projectId }).then((data) => {
        if (!data) {
            toast.error("Failed to deploy " + item.title);
            return;
        }

        if (!data.projectId || !data.id) {
            toast.error("Failed to deploy " + item.title);
            return;
        }

        toast.success("Deployed " + item.title + " successfully");
        return redirect(`/project/${projectId}/service/${data.id}`);
    });
    return redirect(`/project/${projectId}`);
}