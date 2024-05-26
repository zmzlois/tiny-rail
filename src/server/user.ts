"use server"

import { db, users } from "@/db";
import { client1 } from "./client"
import { validateRequest } from "@/lib/lucia";
import { eq } from "drizzle-orm";
import getUser from "./auth";

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


export async function fetchUser() {
    const result = await getUser();


    if (!('user' in result)) throw new Error("User not found");

    if ('user' in result) {
        const { user } = result;
        const data = db.select().from(users).where(eq(users.github_id, user?.githubId)).then((rows) => rows[0]);

        if (!data || data === undefined) throw new Error("User not found");

        return data;
    }

}