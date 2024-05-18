"use server"


import { lucia, validateRequest } from "@/lib/lucia";
import { permanentRedirect, redirect } from "next/navigation";
import { cookies } from "next/headers";


export default async function getUser() {
    const { user, session } = await validateRequest();

    return { user, session };
}


export async function logout(): Promise<ActionResult> {

    const { session } = await validateRequest();
    if (!session) {
        return {
            error: "Unauthorized"
        };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
}

interface ActionResult {
    error: string | null;
}