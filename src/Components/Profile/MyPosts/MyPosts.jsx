import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <div>
                    <Post message='post1' />
                </div>
                <div>
                    <Post message='post2' />
                </div>
                <div>
                    <Post message='post3' />
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
