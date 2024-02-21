import { fakeR2Data } from "./fakeData"

export interface GetFileR2Props{
    id: string
    fileName: string
}

export function getFileR2(params: GetFileR2Props){
    "use server"
    console.log("Server: Running Get R2 File | Function");
    const R2_API_ROUTE = process.env.R2_API_ROUTE;
    const R2_API_KEY = process.env.R2_API_KEY;
    const returnObjArray  = fakeR2Data;
    const numericalId = +params.id - 1; 
    let returnObject = {};
    if (numericalId in returnObjArray){
        returnObject = returnObjArray[numericalId]
    } else {
        console.log("Error, object not found with id")
    }
    //const returnObj  = { id: params.id, fileName: params.fileName, R2_ROUTE:R2_API_ROUTE } 
    //console.log(`R2 Route was ${R2_API_ROUTE}. R2 Key was: ${R2_API_KEY}`)

    return(returnObject)
}

export function listFilesR2(){
    "use server";
    console.log("Server: Running List R2 Files | Function");
    const R2_API_ROUTE = process.env.R2_API_ROUTE;
    const R2_API_KEY = process.env.R2_API_KEY;
    const returnObj  = fakeR2Data;

    //console.log(`R2 Route was ${R2_API_ROUTE}. R2 Key was: ${R2_API_KEY}`)
    return returnObj
}