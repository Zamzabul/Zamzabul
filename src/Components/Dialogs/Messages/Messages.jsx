import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) => {
    return (
        <div className={styles.messages}>
            <Message text={props.text}/>
        </div>
    )
}

export default Messages;