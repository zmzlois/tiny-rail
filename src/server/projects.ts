"use server"


import { env } from "@/lib/constants"
import { client1, client2 } from "./client"
import type { Client, DeploymentStatusInput } from "@/lib/api"
import { getDefaultWorkspaceByUserId } from "./workspace"
import { db, projects } from "@/db"
import { eq } from "drizzle-orm"
import { services } from "@/db/schema/project"
import { CustomError } from "@/lib/error"



export default async function getTemplatesFromRailway() {
    const gql = await client1()

    const result = await gql.query({
        templates: {
            __args: {
                recommended: true,
            },
            __scalar: true,
            edges: {
                node: {
                    __scalar: true,

                }
            },
        }
    }).then((data) => data.templates.edges.sort((a, b) => a.node.activeProjects - b.node.activeProjects))

    return result;

}
// we only want the latest one here for workspace's dashboard
export async function getLastEnvironmentInProject(input: { projectId: string | null }, client: Client) {

    const { projectId } = input;

    if (!projectId) throw new CustomError("projectId not found")

    return client.query({
        environments: {
            __args: {
                projectId: projectId,
                last: 1,
                isEphemeral: false,
            },
            edges: {
                node: {
                    id: true,
                    __scalar: true
                }
            }
        }
    }).then((res) => res.environments.edges.findLast((res) => res.node))



}

export async function getLatestDeploymentInEnvironment(input: { environmentId: string | null, projectId: string | null }, client: Client) {

    if (!input.environmentId) throw new CustomError("input.environment id not found")

    if (!input.projectId) throw new CustomError("input.projectId not found")

    return client.query({
        deployments: {
            __args: {
                input: input,

            },
            edges: {
                node: {
                    id: true,
                    staticUrl: true,
                    __scalar: true,
                }
            }
        }
    }).then((res) => res.deployments.edges.findLast((res) => res.node))

}



// for dashboard
type Project = {
    id: string;
    name: string;
    serviceCount: number;
    deployUrl: string | null;
};

export async function getProjectById(input: { projectId: string | null }, client: Client) {

    const { projectId } = input;

    if (!projectId) throw new CustomError("projectId not found")

    return client.query({
        project: {
            __args: {
                id: projectId
            },
            __scalar: true,
            services: {
                edges: {
                    node: {
                        __scalar: true
                    }
                }
            },
            deployments: {
                __args: {
                    last: 1,
                },
                edges: {
                    node: {
                        __scalar: true
                    }
                }
            }
        }
    }).then((res) => {
        return {
            project: res.project,
            service: res.project.services,
            deployUrl: res.project.deployments.edges[0].node.staticUrl
        }
    })

}
export async function getProjectsFromRailway(client: Client) {

    return client.query({
        projects: {
            __args: {
                teamId: process.env.RAILWAY_TEAM_ID
            },
            __typename: true,
            __scalar: true,
            edges: {
                node: {
                    __scalar: true,
                    services: {
                        __typename: true,
                        edges: {
                            id: true,
                            __scalar: true,
                        }
                    },
                    deployments: {
                        __typename: true,
                        edges: {
                            node: {
                                environmentId: true,
                                staticUrl: true,
                                __scalar: true
                            }
                        }
                    }

                }
            }
        }
    }).then((res) => res.projects.edges)

}

export async function getProjectByDefaultWorkspace(): Promise<Project[]> {
    const workspace = await getDefaultWorkspaceByUserId()
    const gql = await client1()
    // if the workspace is Lois's team account test how it looks like
    if (workspace.name === "zmzlois") {

        const projects = await getProjectsFromRailway(gql)

        Promise.all(projects.map(async (project) => {
            const env = await getLastEnvironmentInProject({ projectId: project.node.id }, gql)
            const envId = env?.node.id;

            const projectId = project.node.id;

            if (!envId) throw new CustomError("project environment not found");
            const deploy = await getLatestDeploymentInEnvironment({ environmentId: envId, projectId }, gql)
            return {
                id: project.node.id,
                name: project.node.name,
                serviceCount: project.node.services.edges.length,
                deployUrl: deploy?.node.staticUrl,
            }
        }))
    }



    // get the external project id to fetch from Railway
    const project = await db.select().from(projects).where(eq(projects.id, workspace.id))

    if (!project || project.length < 1) throw new CustomError("no project found");



    const result = project.map(async (item) => {
        const externalId = item.externalId;

        if (!externalId) throw new CustomError("no external id found in project " + item.name)
        const projectFromRailway = await getProjectById({ projectId: externalId }, gql)


        return {
            id: item.id,
            name: item.name,
            serviceCount: projectFromRailway.service.edges.length,
            deployUrl: projectFromRailway.deployUrl,
        }
    })


    return await Promise.all(result);
}






export async function createProjectById(input: { id: string }) {
    const gql = await client1()
} 