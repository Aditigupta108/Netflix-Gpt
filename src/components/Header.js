import {  signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate=useNavigate();

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
    return(
        <div className="absolute w-screen px-4 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix-logo"></img>
            
            <div className="p-5">
                <button onClick={handleSignOut} className="font-extrabold text-xl">SIGN OUT</button>
            </div>
        </div>
    )
};

export default Header;