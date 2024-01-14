import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        MovieTrailer:null
    },
    reducers:{
        addnowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.MovieTrailer=action.payload;
        }
    },

});

export const {addnowPlayingMovies,addMovieTrailer}=moviesSlice.actions;
export default moviesSlice.reducer;