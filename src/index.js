import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let conversationsData = [
    { userId: 1, name: 'A' },
    { userId: 2, name: 'B' },
    { userId: 3, name: 'C' }
]
let postsData = [
    { postId: 1, message: 'post 1' },
    { postId: 2, message: 'post 2' },
    { postId: 3, message: 'post 3' }
]
let messagesData = [
    [
        {text: 'aaa'},
        {text: 'aaa'}
    ],
    [
        {text: 'bbb'},
        {text: 'bbb'}
    ],
    [
        {text: 'ccc'},
        {text: 'ccc'}
    ]
]

ReactDOM.render(<App conversationsData={conversationsData} 
                     postsData={postsData}
                     messagesData={messagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
