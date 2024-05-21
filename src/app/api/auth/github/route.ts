import { generateState } from "arctic";
import { github } from "@/lib/lucia";
import { cookies } from "next/headers";

export async function GET(request: Request): Promise<Response> {
    const state = generateState();

    const requestUrl = new URL(request.url);

    console.log("[github auth route] requestUrl", requestUrl);

    const origin = requestUrl.searchParams.get("origin");

    console.log("[github auth route] origin", origin);


    const url = await github.createAuthorizationURL(state) + "&origin=" + origin;

    console.log("[github auth route] url", url);

    cookies().set("github_oauth_state", state, {
        path: "/",
        secure: true,
        httpOnly: true,
        maxAge: 60 * 10,
        sameSite: "lax"
    });

    return Response.redirect(url);
}
