import { generateState } from "arctic";
import { github } from "@/lib/lucia";
import { cookies } from "next/headers";
import { serializeState } from "@/lib/generate-state";

export async function GET(request: Request): Promise<Response> {



    const requestUrl = new URL(request.url);

    const origin = requestUrl.searchParams.get("origin")
    const state = serializeState(origin);

    // if we don't have a origin, use the original state
    const url = await github.createAuthorizationURL(state)


    cookies().set("github_oauth_state", state, {
        path: "/",
        secure: true,
        httpOnly: true,
        maxAge: 60 * 10,
        sameSite: "lax"
    });


    return Response.redirect(url);
}

