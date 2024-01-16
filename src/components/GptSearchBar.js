import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceholder}
          className="text-white p-4 m-4 col-span-9 hover:bg-slate-300"
        ></input>
        <button
          className="px-4 py-2 m-4 bg-red-600 font-bold
                 text-white rounded-lg col-span-3"
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
