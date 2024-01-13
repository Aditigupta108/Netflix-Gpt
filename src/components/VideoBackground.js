import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const VideoBackground=({movie_id})=>{
    const [trailerId,settrailerId]=useState(null);

    const getMovieVideo= async ()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/753342/videos?language=en-US",
        API_OPTIONS);
        const json=await data.json();
        console.log(json);
        const filterData=json.results.filter((video)=> video.type==="Trailer");
        console.log(filterData);
        const trailer=filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        settrailerId(trailer.key);
    }
    useEffect(()=>{
        getMovieVideo()
    },
[]);
return(
    <iframe width="560"
     height="315" 
     src={"https://www.youtube.com/embed/1DJYiG6wh0w?si=" + trailerId}
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
)

};

export default VideoBackground;