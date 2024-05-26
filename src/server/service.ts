"use server"

import { client1 } from "./client"
import { CustomError } from "@/lib/error"

type Source = {
    type: "image" | "repo"
    source?: string
}

export async function createService(input: { source: Source }) {

}
export async function destroyService(input: { serviceId?: string, environmentId?: string }) {

    const gql = await client1();
    if (!input.serviceId) throw new CustomError("input.serviceId not found")

    return gql.mutation({
        serviceDelete: {
            __args: {
                id: input.serviceId,

                environmentId: input.environmentId
            },

        }
    })

}

export async function redeployService(input: { serviceId?: string, environmentId?: string }) {

    const gql = await client1();
    if (!input.serviceId) throw new CustomError("input.serviceId not found")
    if (!input.environmentId) throw new CustomError("input.environmentId not found")

    console.log("service id", input.serviceId);
    console.log("environment id", input.environmentId);

    return gql.mutation({
        serviceInstanceRedeploy: {
            __args: {
                serviceId: input.serviceId,
                environmentId: input.environmentId
            },

        }
    })

}