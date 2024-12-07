import { createSlice } from "@reduxjs/toolkit";

const posts = [
    {
        "id": "1",
        "image": "Rectangle",
        "title": "Blockchain developer best practices on innovation chain",
        "lovepost": "/Icons/mainIcon/mainSection/Like.png",
        "showlovepost": false,
        "aboutpost": ["finance", "bitcoin", "crypto"],
        "aboutPostOwner": {"photo": "MemojiBoys","name": "Pavel Gvay ▪","date": "3 weeks ago"},
        "Others": {"Views": "651,324 Views","Upvote": 0,"Downvote": 0}
    },
    {
        "id": "2",
        "image": "Rectangle1",
        "lovepost": "/Icons/mainIcon/mainSection/Like.png",
        "showlovepost": false,
        "title": "The 4-step SEO framework that led to a 1000% increase in traffic. Let's talk about blogging and SEO...",
        "aboutpost": ["seo", "blogging", "traffic"],
        "aboutPostOwner": {"photo": "MemojiBoys1","name": "AR Jakir ▪","date": "3 days ago"},
        "Others": {"Views": "244,564 Views","Upvote": 0,"Downvote": 0}
    },
    {
        "id": "3",
        "image": "Rectangle2",
        "title": "OnePay - Online Payment Processing Web App - Download from uihut.com",
        "lovepost": "/Icons/mainIcon/mainSection/Like.png",
        "showlovepost": false,
        "aboutpost": ["payment", "webapp", "uikit"],
        "aboutPostOwner": {"photo": "MemojiBoys2","name": "Mansurul Haque ▪","date": "1 weeks ago"},
        "Others": {"Views": "601,066 Views","Upvote": 0,"Downvote": 0}
    },
    {
        "id": "4",
        "image": "Rectangle3",
        "title": "Designing User Interfaces - how I sold 1800 copies in a few months by Michal Malewicz",
        "lovepost": "/Icons/mainIcon/mainSection/Like.png",
        "showlovepost": false,
        "aboutpost": ["design", "user interface", "designing"],
        "aboutPostOwner": {"photo": "MemojiBoys3","name": "Michal Malewicz ▪","date": "2 weeks ago"},
        "Others": {"Views": "964,258 Views","Upvote": 0,"Downvote": 0}
    }
]

const loveSlice = createSlice({
    name: 'love',
    initialState: {posts},
    reducers: {
        reset: (state, action) => {
            const id = action.payload
            state.posts[id].showlovepost = !state.posts[id].showlovepost

            if (state.posts[id].showlovepost) {
                state.posts[id].lovepost = "/Icons/mainIcon/mainSection/Heart.png"
            } else {
                state.posts[id].lovepost = "/Icons/mainIcon/mainSection/Like.png"
            }
        },
        incrementUpvote: (state, action) => {
            const id = action.payload
            state.posts[id].Others.Upvote = state.posts[id].Others.Upvote + 1
        },
        incrementDownvote: (state, action) => {
            const id = action.payload
            state.posts[id].Others.Downvote = state.posts[id].Others.Downvote + 1
        },
    }
})

export const loveActions = loveSlice.actions
export default loveSlice