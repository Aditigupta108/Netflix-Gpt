import {  signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/Constants";
import { useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email,displayName} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              navigate("/browse");
              
            } else {
              // User is signed out
              dispatch(removeUser());
              //auth is null
              navigate("/");
            }
          });

          return ()=> unsubscribe();
    }
    ,[]);

    return(
        <div className="absolute w-screen px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
            src={NETFLIX_LOGO}
            alt="Netflix-logo"></img>
            
            <div className="p-5">
                <button onClick={handleSignOut} className="font-extrabold text-xl">SIGN OUT</button>
            </div>
        </div>
    )
};

export default Header;