
import {  useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground=({movie_id})=>{
    //const [trailerId,settrailerId]=useState(null);
    //fetch the trailer video api and store in movie slice
    const Trailer=useSelector(store=>store.movies?.MovieTrailer);
    useTrailerVideo(movie_id);
    
    return(
    <div className="w-screen">
   <iframe className="w-screen aspect-video"
     src={"https://www.youtube.com/embed/1DJYiG6wh0w?si=" + Trailer?.key +"?&autoplay=1&mute=1"}
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; 
     autoplay; 
     clipboard-write;
      encrypted-media; 
      gyroscope; 
      picture-in-picture;
      web-share" allowfullscreen>
         </iframe>
         </div>
)


};

export default VideoBackground;