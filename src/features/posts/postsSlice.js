import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState=[
    {id:'1',title:'Its about Redux',content:"I am learning at a great pace.",date:sub(new Date(),{minutes:10}).toISOString(),
     reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
     }},
    {id:'2',title:'Its about Redux as well',content:"Helikopter Helikopter!! Parakofer Paarakofer.",date:sub(new Date(),{minutes:5}).toISOString(),
    reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }
}
]

const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{
       postsAdded:{
        reducer(state, action){
            state.push(action.payload);
        },
        prepare(title,content,userId){
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId,
                    reactions:{
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0
                    }
                }
            }
        }
       },
       reactionAdded(state,action){
        const {postId, reaction}=action.payload;
        const existingpost=state.find(post=>post.id===postId);
        if(existingpost){
            existingpost.reactions[reaction]++;
        }
       }
    }
})
export const selectAllPosts=(state)=>state.posts;

export const {postsAdded,reactionAdded}=postsSlice.actions;
export default postsSlice.reducer;