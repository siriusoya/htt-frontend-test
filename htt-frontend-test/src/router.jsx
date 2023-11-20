import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      let token = localStorage.getItem("access_token");
      if (!token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    loader: () => {
      let token = localStorage.getItem("access_token");
      if (token) {
        return redirect("/");
      }
      return null;
    },
    element: <LoginPage />,
  },
]);

export default router;
