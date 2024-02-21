<<<<<<< Updated upstream
=======
import { fakeR2Data } from "./fakeData"
import { createQuery, QueryClient, QueryFunction, QueryClientProvider, useQueryClient, queryOptions, QueryKey, QueryFunctionContext} from '@tanstack/solid-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 *  60 * 60 * 24
    }
  }
})

type File = {
  id: number
  title: string
  body: string
}

// Access the key, status and page variables in your query function!
function fetchTodoList({ queryKey }: any) {
    const [_key, { status, page }] = queryKey
    return new Promise()
  }

async function createFiles() {
  const queryKey = ['files']
  const queryFn = async () => {
    const response = await fetch('/r2/api/goes/here');
    if(!response.ok){
        throw new Error('Network response was not ok')
    }
    return response.json()
  }
  try {
    const data = await queryClient.fetchQuery({ queryKey, queryFn, staleTime: 10000})
  } catch (error) {
    console.log(error)
  }
}

>>>>>>> Stashed changes
export interface GetFileR2Props{
    id: string
    fileName: string
}

export function getFileR2(params: GetFileR2Props){
    "use server"
    console.log("Ran on server only!")
    const R2_API_ROUTE = import.meta.env.R2_API_ROUTE
    const R2_API_KEY = import.meta.env.R2_API_KEY

    const returnObj  = { id: params.id, fileName: params.fileName, R2_ROUTE:R2_API_ROUTE } 
    console.log(`R2 Route was ${R2_API_ROUTE}. R2 Key was: ${R2_API_KEY}`)

    return(returnObj)
}

export function listFilesR2(){
    "use server"
    console.log("Ran on server!")
    const R2_API_ROUTE = import.meta.env.R2_API_ROUTE
    const R2_API_KEY = import.meta.env.R2_API_KEY
    const returnObj  = [{first: "first", second: "second"}, {first: "first-2", second: "second-2"}] 

    console.log(`R2 Route was ${R2_API_ROUTE}. R2 Key was: ${R2_API_KEY}`)
    return returnObj
}