import React from 'react';
import styles from './User.module.css';

const User = () => {
    return (
        <div className={styles.profile}>
            <div>
                <img src='.\ava.png' />
            </div>
        </div>
    )
}

export default User;