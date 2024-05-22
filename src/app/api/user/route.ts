import { NextRequest, NextResponse } from "next/server";
import cors from "../cors";
import { RequestHandler } from "next/dist/server/next";

const token = process.env.RAILWAY_TEAM_TOKEN


// Handle the API route
export async function GET(req: any) {
    // Run the cors middleware
    await cors(req);



    const headers = {
        "Authorization": `Bearer ${token}`,
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    const header = new Headers(headers)

    try {
        const res = await fetch("https://backboard.railway.app/graphql/v2", {
            method: 'POST',
            headers: header,
            // body: JSON.stringify({ query: userQuery, variables: {} }),
            next: { revalidate: 10 },
        })
        const data = await res.json()

        return Response.json({
            status: 200,
            message: "success",
            data: data.data
        })

    } catch (err) {
        console.log("/api/user [error]", err)
        return Response.json({
            status: 400,
            message: "error",
            data: err
        })
    }


}