import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";



const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();

    const getnowPlayingMovies= async () =>{
        const data=await fetch
        ("https://api.themoviedb.org/3/movie/now_playing",API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addnowPlayingMovies(json.results));

    }
    useEffect(()=>{
        getnowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;