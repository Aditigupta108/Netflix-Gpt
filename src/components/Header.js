import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { LANG_CONSTANTS, NETFLIX_LOGO } from "../utils/Constants";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSerachView } from "../utils/gptSearchSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    //toggle gpt search.....
    dispatch(toggleGptSerachView());
  };

  const handlechangeLang = (e) => {
    dispatch(changeLang(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        //auth is null
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="Netflix-logo"></img>

      <div className="p-5">
        <select
          onChange={handlechangeLang}
          className="p-2 rounded-lg bg-gray-800 text-white font-bold"
        >
          {LANG_CONSTANTS.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleGptSearch}
          className="text-white bg-purple-500 p-2 mx-4 font-bold rounded-lg"
        >
          GptSearch
        </button>
        <button
          onClick={handleSignOut}
          className="font-extrabold text-white text-xl"
        >
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default Header;
