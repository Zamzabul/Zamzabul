import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) => {
    let messagesElements = props.messagesElements.map(e => <Message text={e.text}/>)
    return (
        <div className={styles.messages}>
            {messagesElements}
        </div>
    )
}

export default Messages;