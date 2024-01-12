
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body=()=>{
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

    //if anytime user sign in/up or  signout it fetch the api once avoiding inclusing dispatch logic
    //at ransom places

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email,displayName} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              // here we cannot write navigate as here body is parent component provide navigation in child components
            } else {
              // User is signed out
              dispatch(removeUser());
              // ...
            }
          });
    }
    ,[]);

    return(
       <RouterProvider router={appRouter} />
        );

};
export default Body;