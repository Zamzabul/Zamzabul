import React from 'react';
import styles from './Conversations.module.css';
import Conversation from './Conversation/Conversation';

const Conversations = (props) => {
    let conversationsElements = props.state.dialogs.map(dialog => <Conversation userId={dialog.userId} 
                                                                        name={dialog.name}
                                                                        messages={props.state.messages}/>);
    return (
        <div className={styles.conversations}>
            {conversationsElements}
        </div>
    )
}

export default Conversations;