import React from 'react';
import styles from './Content.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profile from './Profile/Profile';

const Content = () => {
    return (
        <div className={styles.content}>
            <div>
                <img src='.\curves.jpg' />
            </div>
            <div>
                <Profile/>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Content;