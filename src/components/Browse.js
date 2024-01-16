import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MovieContainer from "./MovieContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import GptSearch from "./GptSearch";
import showGptSearch from "../utils/gptSearchSlice";
import { useSelector } from "react-redux";
import { BG_LOGO } from "../utils/Constants";

const Browse = () => {
  //fetching the data and updating my store
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <>
          <div className="absolute -z-10">
            <img src={BG_LOGO} alt="logo"></img>
          </div>
          <GptSearch />
        </>
      ) : (
        <>
          <MovieContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
