"use server"


import { env } from "@/lib/constants"
import { client1, client2 } from "./client"
import type { Client, DeploymentStatusInput } from "@/lib/api"
import { getDefaultWorkspaceByUserId } from "./workspace"
import { db, projects } from "@/db"
import { eq } from "drizzle-orm"
import { services } from "@/db/schema/project"
import { CustomError } from "@/lib/error"
const teamId = env.RAILWAY_TEAM_ID



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
};

export async function getProjectById(input: { projectId: string | null }) {

    const { projectId } = input;

    const client = await client1();

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

    const result = client.query({
        projects: {
            __args: {
                teamId: teamId
            },
            __scalar: true,
            edges: {
                node: {
                    __scalar: true,

                }
            }
        }
    })

    return result.then((res) => res.projects.edges.map((data) => data.node))

}

export async function getProjectByDefaultWorkspace() {
    const workspace = await getDefaultWorkspaceByUserId()
    const gql = await client1()
    // if the workspace is Lois's team account test how it looks like
    // TODO: comment back in or sth
    // if (workspace.name === "zmzlois") {

    return (await getProjectsFromRailway(gql)).map((item) => {
        return {
            externalId: item.id,
            updateAt: item.updatedAt,
            ...item,
        }
    })

    // }

    // get the external project id to fetch from Railway
    return db.select().from(projects).where(eq(projects.id, workspace.id))
}


export async function createProjectById(input: { id: string }) {
    const gql = await client1()
} 