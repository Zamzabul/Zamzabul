import React from 'react';
import styles from './Conversations.module.css';
import Conversation from './Conversation/Conversation';

const Conversations = (props) => {
    let conversationsElements = props.conversationsData.map(dialog => <Conversation userId={dialog.userId} name={dialog.name}/>);
    return (
        <div className={styles.conversations}>
            {conversationsElements}
        </div>
    )
}

export default Conversations;