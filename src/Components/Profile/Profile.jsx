import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import User from './User/User';
import { addPost } from './../../Redux/State';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <img src='.\curves.jpg' />
            </div>
            <div>
                <div>
                    <User />
                </div>
                <div>
                    <MyPosts posts={props.state.posts}
                             addPost={props.addPost}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;