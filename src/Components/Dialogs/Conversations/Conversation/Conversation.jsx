import React from 'react';
import styles from './Conversation.module.css';
import { NavLink, Route } from 'react-router-dom';
import Messages from './../../Messages/Messages';

const Conversation = (props) => {
    let path = '/dialogs/' + props.userId;
    let msgId = props.userId - 1;
    return (
        <div className={styles.superConversation}>
            <div className={styles.conversation}>
                <NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
            </div>
            <div>
                <Route path={path} render={() => <Messages messagesElements={props.messages[msgId]}/>}/>
            </div>
        </div>
    )
}

export default Conversation;