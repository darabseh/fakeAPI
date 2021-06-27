import Post from './post-item'
import styles from './post-grid.module.css'

function PostGrid(props) {
    const { posts } = props;



    return (
        <div className={styles.grid}>

            {posts.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    );
}

export default PostGrid