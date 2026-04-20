import React from 'react'

export default async function SecondBlog() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return <div>
        <h1>Title: Bla Bla 2 </h1>
        <img src="https://placehold.co/400" alt="" />
    </div>
}
