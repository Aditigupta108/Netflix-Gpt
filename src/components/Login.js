
import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm, setisSignInForm]=useState(true);

    const toggleSignupform=()=>{
       setisSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            <div className="absolute">
                <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="logo"></img>
                </div>

                <form className="w-4/12 absolute  p-12 bg-black my-20 mx-96 bg-opacity-85 h-auto" >
                    <h1 className="text-white font-bold text-3xl my-2">
                       {isSignInForm ? "Sign In" : "Sign Up" }</h1>

                      {!isSignInForm && <input className="my-4 p-4 w-full bg-slate-600" 
                    type="text" placeholder="Full Name">
                    </input>}

                
                    <input className="my-4 p-4 w-full bg-slate-600" 
                    type="text" placeholder="E-mail Address">
                    </input>

                    <input className="my-4 p-4 w-full bg-slate-600" 
                    type="password" placeholder="Password"></input>

                    <button className="my-5 py-5 w-full bg-red-600 text-white rounded-lg">
                        Sign In</button>

                    <p className="text-white py-2 px-2 cursor-pointer" onClick={toggleSignupform}>
                        {isSignInForm ? "New to Netflix? Sign In now.":
                        "Already registered? Sign In now."}</p>    

                </form>
            
        </div>

    );

};
export default Login;