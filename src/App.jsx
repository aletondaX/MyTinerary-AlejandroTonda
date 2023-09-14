import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cities from "./pages/Cities.jsx";
import City from "./pages/City.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "./redux/actions/authAction";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Index />
  },
  {
    path:"/cities",
    element:<Cities />
  },
  {
    path:"/city/:id",
    element:<City />
  },
  {
    path:"/login",
    element:<SignIn />
  },
  {
    path:"/signup",
    element:<SignUp />
  }
]) 

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("renderizando app.jsx");
    dispatch(authenticate());
  }, [])
  

  return (
    <RouterProvider router={router}/>
  );
}