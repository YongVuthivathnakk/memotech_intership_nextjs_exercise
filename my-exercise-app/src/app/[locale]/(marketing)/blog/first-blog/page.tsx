import Image from "next/image";


export default async function FirstBlogPage() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return <div>
        <h1>Title: Bla Bla </h1>

        {/* This wont work becuase Nextjs block the http request for security measures so we have to setup the next config to allow it */}
        <Image src={"https://www.shutterstock.com/image-photo/kebab-lavash-meat-sauce-vegetables-260nw-2395305699.jpg"} alt={""} width={400} height={400}/>
    </div>
}