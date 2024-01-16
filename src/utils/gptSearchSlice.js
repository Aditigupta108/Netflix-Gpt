import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptSerachView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        }
    },
});


export const {toggleGptSerachView}=gptSearchSlice.actions;
export default gptSearchSlice.reducer;
