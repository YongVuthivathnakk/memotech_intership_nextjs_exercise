import React from 'react'
import Image from 'next/image'

export default async function SecondBlog() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return <div>
        <h1>Title: Bla Bla 2 </h1>
        <Image src={'/samuri_doge.jpg'} alt={'a wallpaper'} width={1080} height={790}></Image>
    </div>
}
