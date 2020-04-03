import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) => {
    let messagesElements = props.messagesElements.map(e => <Message text={e.text}/>)
    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={styles.messages}>
            <div>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Messages;