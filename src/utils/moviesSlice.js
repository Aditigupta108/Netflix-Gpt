import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        MovieTrailer:null,
        PopularMovies:null,
        TrendingMovies:null,
    },
    reducers:{
        addnowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.PopularMovies=action.payload;
        },
        addTrendingMovies:(state, action)=>{
            state.TrendingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.MovieTrailer=action.payload;
        }
    },

});

export const {addnowPlayingMovies,addMovieTrailer,addPopularMovies,addTrendingMovies}
=moviesSlice.actions;
export default moviesSlice.reducer;