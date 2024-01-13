import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MovieContainer from "./MovieContainer";

const Browse=()=>{

    //fetching the data and updating my store
    useNowPlayingMovies();
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
        </div>
        );

};
export default Browse;