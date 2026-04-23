"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "../../../../lib/axios";

// functions
async function getHealth() {
    const { data } = await axios.get("api/health");
    console.log(data);
    return data;
}

async function postEcho(message: string) {
    
    const { data } = await axios.post("api/echo", { message })
    console.log(data);
    return data;
}   


export default function TanstackQuery() {
    // access the client
    const queryClient = useQueryClient();


    // Queries

    const query = useQuery({ queryKey: ['health'], queryFn: getHealth });

    // Mutation
    const mutation = useMutation({
        mutationFn: postEcho,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['health']})
        }
    })



    return (
      <div>
            <h1>Data</h1>
            <p>{query.data?.at}</p>
            <button onClick={() => {
                mutation.mutate("hi")
            }}>mutate data</button>
    </div>
  )
}
