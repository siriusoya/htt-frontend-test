import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      let token = localStorage.getItem("access_token")
      if(!token) {
        return redirect('/login')
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <div>halaman utama!</div>,
      },
    ],
  },
    {
      path: "/login",
    loader: () => {
      let token = localStorage.getItem("access_token")
      if(token) {
        return redirect('/')
      }
      return null;
    },
    element: <div>halaman login</div>,
    },
  ]);

  export default router;