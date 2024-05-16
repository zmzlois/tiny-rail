import { NextRequest, NextResponse } from "next/server";
import cors from "../../cors";
import { RequestHandler } from "next/dist/server/next";
import { userProjectQuery } from "@/graphql/user.query";

const token = process.env.RAILWAY_PERSONAL_TOKEN


// Handle the API route
export async function GET(req: any) {
    // Run the cors middleware
    await cors(req);


    const url = new URL(process.env.RAILWAY_API!);

    const headers = {
        "Authorization": `Bearer ${token}`,
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    const header = new Headers(headers)

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({ query: userProjectQuery, variables: {} }),
            next: { revalidate: 10 },
        })
        const data = await res.json()


        return Response.json({
            status: 200,
            message: "success",
            data: data.data

        })

    } catch (err) {
        console.log("/api/project [error]", err)
        return Response.json({
            status: 400,
            message: "error",
            data: err
        })
    }


}