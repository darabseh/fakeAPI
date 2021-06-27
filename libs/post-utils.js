export async function GetAllPosts() {
    const response = await fetch("https://mockend.com/darabseh/nextjs-blog/posts");
    const data = await response.json();
    return data;
}

export async function GetAllPostPaths() {
    const posts = await GetAllPosts();
    return posts.map((post) => post.id);

}

export async function GetPostData(id) {
    const response = await fetch(`https://mockend.com/darabseh/nextjs-blog/post/${id}`);
    const data = await response.json();
    return data;
}