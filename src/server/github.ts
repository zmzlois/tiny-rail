"use server"
import { db, accounts } from "@/db"
import { validateRequest } from "@/lib/lucia"
import { eq } from "drizzle-orm"
import type { Endpoints } from "@octokit/types"

type UserRepositories = Endpoints["GET /users/{username}/repos"]["response"]["data"]

export async function getUserRepos(username: string) {
    const { session } = await validateRequest()

    if (!session) {
        throw new Error("User is not authenticated")
    }

    const accessToken = await db.select({ accessToken: accounts.access_token }).from(accounts).where(eq(accounts.userId, session.userId)).then((rows) => rows[0].accessToken);

    if (!accessToken) {
        throw new Error("No access token found for user")
    }

    const headers = {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28"
    }

    const header = new Headers(headers)


    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=10`, {
            headers: header
        })
        const data = await response.json() as UserRepositories

        const result = data.map((repo) => {
            return {
                full_name: repo.full_name,
                branch: repo.default_branch,
                clone_url: repo.clone_url,
            }
        })

        return result


    } catch (error) {
        console.error("[server action/github]:", error)
        throw new Error("Failed to fetch user repos")
    }

}