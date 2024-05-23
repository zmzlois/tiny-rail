import { Dispatch } from "react";
import type { ProjectCommandProps, CommandItems } from "@/app/(public)/new/_components/project-command"

import { getUserRepos } from "@/server/github";
import getTemplatesFromRailway from "@/server/projects";
import { QueryTemplatesConnectionEdge } from "@/lib/api";

export function handleGithub(
    setProjects: Dispatch<ProjectCommandProps>,
    username: string
) {
    const commandItem = {
        title: "Select a Github repo",
        placeholder: "Search for a Github repo...",
        items: [] as CommandItems[],
    };

    getUserRepos(username).then((data) => {
        data.map((repo: any) => {
            const title = repo.clone_url.split(".com/")[1].replace(".git", "");

            commandItem.items.push({
                title: title,
                action: repo.clone_url,
            });
        });
        setProjects(commandItem);
    });
}

export function handleTemplates(
    setProjects: Dispatch<ProjectCommandProps>,
    username: string
) {
    const commandItem = {
        title: "Select a template",
        placeholder: "Search for a template...",
        items: [] as CommandItems[],
    };

    try {
        const templates = getTemplatesFromRailway().then((data) => {

            data.map((template) => {
                console.log("template", template.node)

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