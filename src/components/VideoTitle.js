

const VideoTitle=({title,overview})=>{
    return(
        <div className="pt-52 px-10">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-4 w-1/3 text-lg">{overview}</p>
            <div className="py-4">
                <button className="bg-slate-500 text-white font-bold text-lg w-28 py-3 
                rounded-lg bg-opacity-50">
                ▶️Play</button>
                <button className="bg-slate-500 text-white font-bold text-lg 
                w-28 mx-2 py-3 rounded-lg bg-opacity-50">
                    More Info</button>
            </div>
        </div>

    )
}

export default VideoTitle;