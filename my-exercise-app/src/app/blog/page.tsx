

import React from "react";
import AboutPage from "../about/page";
import { revalidateTag } from "next/cache";

// Refresh data every 60 seconds
const SECOND = 60
export const revalidate = SECOND;


export default async function Blog() {
  
    const data1 = await fetch(' https://jsonplaceholder.typicode.com/posts/1'); // fetch and cache
    const post1 = await data1.json();


    const data2 = await fetch(' https://jsonplaceholder.typicode.com/posts/2', {cache: 'no-store'}); // fectch but does not cache
    const post2 = await data2.json();

    const data3 = await fetch(' https://jsonplaceholder.typicode.com/posts/3', { next: { tags: ['post3'] } }); // revalidate on demand
    const post3 = await data3.json();
    
    async function revalidatePost3() {
        "use server";

        revalidateTag("post3", "default");
        console.log("revalidate Post 3");
    }

    return (
    <div>  
            <h1>Title: {post1.title}</h1>
            <h1>Title: {post2.title}</h1>
            <h1>Title: {post3.title}</h1>

        <button onClick={revalidatePost3}>Revalidate Post 3</button>
    </div>
  );
}



