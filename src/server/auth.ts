"use server"

import { signOut, signIn } from "@/auth"
import { redirect } from "next/navigation"



export async function signOutFunction() {
    return signOut()
}

export async function signInFunction() {

    await signIn()
    return redirect("/dashboard")
}
