import styles from './post-details.module.css'

function PostDetails(props) {

    const { post } = props;

    return (
        <div className={styles.card}>
            <h1>{post.title}&rarr;</h1>
            <hr />
            <p>{post.description}</p>
        </div>
    );
}

export default PostDetails