import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db"
import { accounts, users } from "./db/schema/user"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
    }),
    callbacks: {
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.id = user.id
            }
            return token
        },
        session({ session, token }) {
            session.user.id = token.id as string
            return session
        },
    },

})