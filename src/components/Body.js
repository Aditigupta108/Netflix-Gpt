
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body=()=>{
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
    //at random places
    return(
       <RouterProvider router={appRouter} />
        );

};
export default Body;