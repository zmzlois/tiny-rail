import { Dispatch } from "react";
import type { ProjectCommandProps, CommandItems } from "@/app/(public)/new/_components/project-command"

import { getUserRepos } from "@/server/github";
import getTemplatesFromRailway from "@/server/projects";
import { QueryTemplatesConnectionEdge } from "@/lib/api";
import { createService } from "@/server/service";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export const newProject: ProjectCommandProps = {
    title: "New Project",
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
    username: string
) {
    const commandItem = {
        title: "Select a Github repo",
        placeholder: "Search for a Github repo...",
        items: [] as CommandItems[],
    };


    try {

        getUserRepos(username).then((data) => {
            data.map((repo: any) => {
                const title = repo.clone_url.split(".com/")[1].replace(".git", "");

                commandItem.items.push({
                    title: title,
                    action: repo.clone_url,
                    branch: repo.branch,
                });
            });
            setProjects(commandItem);
        });

    } catch (e) {
        console.error("[handleGithub]:", e)
    }


}

export function handleTemplates(
    setProjects: Dispatch<ProjectCommandProps>,

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

export function handleDatabase(item: CommandItems, setProjects: Dispatch<ProjectCommandProps>) {

    setProjects("creating");


    const name = item.title.split(" ").pop()!;

    toast.info("Trying to deploy " + name + "...");



    try {
        return createService({ source: { source: item.image, type: "image", name } }).then((data) => {

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