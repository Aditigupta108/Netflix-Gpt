import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MovieContainer from "./MovieContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";

const Browse=()=>{

    //fetching the data and updating my store
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    return(
        <div>
            <Header />
            {/*
            - MovieContainer
                - Movie background
                - Movie title
            - Secondary container
                - movies list * n
                    - movie cart *n    
            */}
            <MovieContainer />
            <SecondaryContainer />
        </div>
        );

};
export default Browse;