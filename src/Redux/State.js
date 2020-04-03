let state = {
    profilePage: {
        posts: [
            { postId: 1, message: 'post 1' },
            { postId: 2, message: 'post 2' },
            { postId: 3, message: 'post 3' }
        ]
    },
    dialogsPage: {
        dialogs: [
            { userId: 1, name: 'A' },
            { userId: 2, name: 'B' },
            { userId: 3, name: 'C' }
        ],
        messages: [
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
    },
    sideBar: []
}

export default state;