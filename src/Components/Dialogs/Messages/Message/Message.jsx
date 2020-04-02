import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={styles.message}>{props.text}</div>
        </div>
    )
}

export default Message;