"use server"

import { createClient } from "@/lib/api"


export const client1 = async () => createClient({
    batch: true,
    url: 'https://backboard.railway.app/graphql/v2',
    headers: {
        Authorization: `Bearer ${process.env.RAILWAY_PERSONAL_TOKEN}`,
        Accept: "*/*",
        "Content-Type": "application/json"
    }
})

export const client2 = async () => createClient({
    batch: {
        batchInterval: 1000, // ms
        maxBatchSize: 2,
    },
    url: 'https://backboard.railway.app/graphql/v2',
    headers: {
        Authorization: `Bearer ${process.env.RAILWAY_PERSONAL_TOKEN}`,
        Accept: "*/*",
        "Content-Type": "application/json"
    }

})



export async function fetchTeamInfo(input: { id: string }) {

    const gql = await client1()
    return gql.query({
        team: {
            __args: { id: input.id },
            __scalar: true,
            name: true,
        }
    })
}