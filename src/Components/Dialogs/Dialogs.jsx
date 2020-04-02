import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Conversations from './Conversations/Conversations';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <Conversations/>
        </div>
    )
}

export default Dialogs;