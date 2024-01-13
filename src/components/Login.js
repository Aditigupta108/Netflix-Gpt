import { checkvalidateSignInform ,checkvalidateSignUpform} from "../utils/checkvalidateform";
import { useState, useRef, useSyncExternalStore } from "react";
import Header from "./Header";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO } from "../utils/Constants";

const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);


  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleOnClickbutton = () => {
    //validation
    const message = checkvalidateSignInform(
      email?.current?.value,
      password?.current?.value
    );
    const message2 = checkvalidateSignUpform(
        name?.current?.value,
        email?.current?.value,
        password?.current?.value
      );

    seterrorMessage(message);
    seterrorMessage(message2);

    if (message) return;
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value, photoURL: ""
          }).then(() => {
            // Profile updated!
            const {uid, email,displayName} = auth.currentUser;
            dispatch
            (addUser
              ({uid:uid, 
                email:email, 
                displayName:displayName
              }));

            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "" + errorMessage);
        });
    } 
    
    else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignupform = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_LOGO}
          alt="logo"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute  p-12 bg-black my-20 mx-96 bg-opacity-85 h-auto"
      >
        <h1 className="text-white font-bold text-3xl my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            className="my-4 p-4 w-full bg-slate-600"
            type="text"
            placeholder="Full Name"
          ></input>
        )}

        <input
          ref={email}
          className="my-4 p-4 w-full bg-slate-600"
          type="text"
          placeholder="E-mail Address"
        ></input>

        <input
          ref={password}
          className="my-4 p-4 w-full bg-slate-600"
          type="password"
          placeholder="Password"
        ></input>

        <p className="font-bold text-red-600 text-2xl">{errorMessage}</p>

        <button
          className="my-5 py-5 w-full bg-red-600 text-white rounded-lg"
          onClick={handleOnClickbutton}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white py-2 px-2 cursor-pointer"
          onClick={toggleSignupform}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </div>
  );
};
export default Login;
