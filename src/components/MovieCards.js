import { IMAGE_CDN } from "../utils/Constants";

const MovieCards = ({ posterPath }) => {
  return (
    <div className="w-44 pr-6">
      <img alt="Movie Cards" src={IMAGE_CDN + posterPath} />
    </div>
  );
};
export default MovieCards;
