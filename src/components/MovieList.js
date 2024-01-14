import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
    console.log(movies);
  return (
    <div className="bg-black">
        <h1 className="px-10 py-4 font-bold text-xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll px-10">
        
          <div className="flex">
            {movies.map((movie)=>
            ( <MovieCards className="p-4" key={movie.id} posterPath={movie.poster_path} />
            ))}
              
          </div>

        </div>
      </div>
  );
};
export default MovieList;
