import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img src='.\userpick.png'/>
            {props.text}
        </div>
    )
}

export default Post;