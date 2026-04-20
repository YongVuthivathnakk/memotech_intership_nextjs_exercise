export default async function FirstBlogPage() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return <div>
        <h1>Title: Bla Bla </h1>
        <img src="https://placehold.co/400" alt="" />
    </div>
}