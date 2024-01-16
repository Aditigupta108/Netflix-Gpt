import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies &&
    movies.PopularMovies &&
    movies.TrendingMovies && (
      <div className="bg-black">
        <div className="-mt-40 relative z-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.TrendingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
