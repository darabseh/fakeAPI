import styles from './post-item.module.css'
import Link from 'next/link'

function PostItem(props) {
    const post = props.post;
    return (
        <Link href={`/posts/${post.id}`}>
            <a className={styles.card}>
                <h2>{post.title}&rarr;</h2>
                <p>{post.body}</p>
            </a>
        </Link>
    );
}
export default PostItem