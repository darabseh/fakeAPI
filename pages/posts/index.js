import PostGrid from "../../components/posts/post-grid";
import { GetAllPosts } from '../../libs/post-utils'
import Head from 'next/head'

function Posts(props) {
    const { posts } = props;

    return (
        <>
            <Head>
                <title>All posts</title>
            </Head>
            <PostGrid posts={posts}></PostGrid>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = await GetAllPosts();
    return {
        props: {
            posts: allPosts,
        },
    };

}


export default Posts