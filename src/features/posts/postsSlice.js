import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[
    {id:'1',title:'Its about Redux',content:"I am learning at a great pace."},
    {id:'2',title:'Its about Redux as well',content:"Helikopter Helikopter!! Parakofer Paarakofer."}
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
                    userId
                }
            }
        }
       }
    }
})
export const selectAllPosts=(state)=>state.posts;

export const {postsAdded}=postsSlice.actions;
export default postsSlice.reducer;