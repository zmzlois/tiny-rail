"use server"


import { env } from "@/lib/constants"
import { client1, client2 } from "./client"
import type { Client, DeploymentStatusInput } from "@/lib/api"
import { getDefaultWorkspaceByUserId } from "./workspace"
import { db, projects } from "@/db"
import { eq } from "drizzle-orm"
import { environments, services } from "@/db/schema/project"
import { CustomError } from "@/lib/error"

import { create } from "domain"
import { generate } from "@/lib/generate-name"
import { getProjectEnvironment } from "./environment"
import { createOrUpdateServiceInDb } from "./service"
const teamId = env.RAILWAY_TEAM_ID

export async function findProjectInDb(input: { projectId: string }) {

    const project = await db.select().from(projects).where(eq(projects.id, input.projectId)).then((res) => res[0])

    if (!project) throw new CustomError("project not found")

    return project;
}


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

export async function syncServiceInProjectFromRailway(input: { projectId: string }) {

    const gql = await client1()

    const result = await gql.query({
        project: {
            __args: {
                id: input.projectId
            },
            __scalar: true,
            edges: {
                node: {
                    __scalar: true,
                    id: true,
                    name: true,
                    __typename: true
                }
            }
        }
    })

}

export async function getProjectById(input: { projectId: string | null }) {

    const { projectId } = input;

    if (!projectId) throw new CustomError("projectId not found")

    const externalId = await findProjectInDb({ projectId: projectId }).then((res) => res.externalId)

    if (!externalId) throw new CustomError("project's external Id not found")

    console.log('externalId', externalId)

    await getProjectByIdFromRailway({ projectId, externalId }, await client1())

    const project = await db.select().from(projects).where(eq(projects.id, projectId)).then((res) => res[0])


    if (!project) throw new CustomError("project not created")

    const servicesInProject = await db.select().from(services).where(eq(services.projectId, projectId)).then((res) => res)

    if (!servicesInProject) throw new CustomError("no service found in project")

    return { project, services: servicesInProject }

}

export async function getProjectByIdFromRailway(input: { projectId: string, externalId: string }, gql?: Client) {
    if (!gql) gql = await client1()

    console.log("input.projectId", input.projectId)



    const serviceInPj = await gql.query({
        project: {
            __args: {
                id: input.externalId
            },
            __scalar: true,

            id: true,
            name: true,
            __typename: true,
            environments: {
                edges: {
                    node: {
                        id: true,
                        __scalar: true

                    }
                }
            },
            services: {
                edges: {
                    node: {
                        id: true,
                        name: true,
                        __scalar: true,

                        deployments: {
                            edges: {
                                node: {
                                    id: true,
                                    staticUrl: true,
                                    __scalar: true
                                }
                            }
                        }
                    }
                }


            }
        }
    })

    if (!serviceInPj) return console.log("Services in project not found")

    const createService = serviceInPj.project.services.edges.map(async (data) => {

        const url = data.node.deployments.edges.map((res) => res.node.url)[0]

        const name = data.node.name
        const externalId = data.node.id
        return createOrUpdateServiceInDb({ externalId, projectId: input.projectId, name, url })








    })

    return { serviceFromRailway: serviceInPj, serviceInDb: createService }


}
export async function getProjectsFromRailway(client: Client) {

    return client.query({
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
    }).then((res) => res.projects.edges.map(async (data) => {
        const findProject = await db.select().from(projects).where(eq(projects.externalId, data.node.id)).then((res) => res[0])

        if (findProject) return

        if (!findProject) return db.insert(projects).values({
            name: data.node.name,
            externalId: data.node.id,
            workspaceId: 'faxle5bb7mbgzwnp'
        }).returning().then((res) => res)
    }))





}

export async function getProjectByDefaultWorkspace() {
    const workspace = await getDefaultWorkspaceByUserId()

    // added to sync services from Railway
    await getProjectsFromRailway(await client1())

    // get the external project id to fetch from Railway
    const projectInWs = await db.select().from(projects).where(eq(projects.workspaceId, workspace.id))

    if (!projectInWs) throw new CustomError("project not found")

    return projectInWs;
}


export async function createNewProject() {

    const projectName = generate()
    const workspace = await getDefaultWorkspaceByUserId()

    if (!workspace) throw new CustomError("workspace not found")



    try {
        return db.insert(projects).values({
            name: projectName,
            externalId: process.env.RAILWAY_PROJECT_ID,
            workspaceId: workspace.id
        }).returning().then((res) => res[0])
    } catch (e) {
        console.log(e)
        throw new CustomError("Failed to create project: " + e)
    }

}


export async function createEmptyProject() {
    const projectName = generate()
    const workspace = await getDefaultWorkspaceByUserId()

    if (!workspace) throw new CustomError("workspace not found")

    try {
        return db.insert(projects).values({
            name: projectName,
            externalId: process.env.RAILWAY_PROJECT_ID,
            workspaceId: workspace.id
        }).returning().then((res) => res[0])
    } catch (e) {
        console.log(e)
        throw new CustomError("Failed to create project: " + e)
    }
}