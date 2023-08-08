import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Cities from "./pages/Cities.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Index />
  },
  {
    path:"/cities",
    element:<Cities />
  }
]) 

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}