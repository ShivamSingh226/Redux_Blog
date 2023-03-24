import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0',name:'Dude Lebowski'},
    {id:'1',name:'Allen Solly'},
    {id:'2',name:'Bradley Cooper'}
]

const UsersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})
export const selectAllUsers=(state)=>state.users;
export default UsersSlice.reducer;