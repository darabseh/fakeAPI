import { Fragment } from 'react'
import styles from './intro.module.css'

function Intro() {
    return (
        <Fragment>
            <h1 className={styles.title}>
                Welcome to Darabseh blog
        </h1>

            <p className={styles.description}>
                Posts are only dummy data
        </p>
        </Fragment>
    )
}

export default Intro