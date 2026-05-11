import { Post } from "@/types/post";
import { useQuery, useQueryClient } from "@tanstack/react-query";

async function  getPosts() : Promise<Post[]> {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!result.ok) {
        throw new Error("error fetch");
    }
    return result.json();
}

async function  getPostById(id:number) : Promise<Post> {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!result.ok) {
        throw new Error("error fetch");
    }
    return result.json();
}


export default function usePosts() {
    const queryClient = useQueryClient();
    const { data, isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    })

    return {
        posts: data ?? [],
        isLoading: isLoading,
        isError: isError
    }
} 