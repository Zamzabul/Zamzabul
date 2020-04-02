import React from 'react';
import styles from './Conversations.module.css';
import Conversation from './Conversation/Conversation';

let conversationsData = [
    { userId: 1, name: 'A' },
    { userId: 2, name: 'B' },
    { userId: 3, name: 'C' }
]
let conversationsElements = conversationsData.map(dialog => <Conversation userId={dialog.userId} name={dialog.name}/>);

const Conversations = (props) => {
    return (
        <div className={styles.conversations}>
            {conversationsElements}
        </div>
    )
}

export default Conversations;