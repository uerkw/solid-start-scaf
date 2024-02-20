import type { APIEvent } from "@solidjs/start/server/types";


export async function GET( {params}: APIEvent ) {
    console.log(`GET requested for File: ${params.id} by User ${params.user}`);
    const R2_API_ROUTE = import.meta.env.R2_API_ROUTE
    console.log(`The string is: ${R2_API_ROUTE}`)
}