import { useState } from "react";
import Index from "./pages/Index/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Index />
  }
]) 

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;