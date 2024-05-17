"use server"

import { client1 } from "./client"

export async function fetchMe() {

    const gql = await client1()
    const me = gql.query({
        me: {
            __scalar: true,
            teams: {
                edges: {
                    node: {
                        __scalar: true,
                        id: true,
                        name: true,
                    }
                }

            },
            projects: {
                __scalar: true,

            },

        }
    })

    return me;

}