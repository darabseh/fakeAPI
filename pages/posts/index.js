import PostGrid from "../../components/posts/post-grid";
import { GetAllPosts } from '../../libs/post-utils'

function Posts(props) {
    const { posts } = props;

    return (
        <PostGrid posts={posts}></PostGrid>
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