import styles from './post-item.module.css'

function PostItem(props) {
    const post = props.post;
    return (
        <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>{post.title}&rarr;</h2>
            <p>{post.description}</p>
        </a>
    );
}
export default PostItem