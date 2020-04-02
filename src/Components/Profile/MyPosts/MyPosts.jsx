import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

let postsData = [
    { postId: 1, message: 'post 1' },
    { postId: 2, message: 'post 2' },
    { postId: 3, message: 'post 3' }
]
let postsElements = postsData.map(post => <Post postId={post.postId} message={post.postId}/>);

const MyPosts = () => {
    return (
        <div className={styles.myposts}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
