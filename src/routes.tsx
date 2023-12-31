import Login from "./pages/Login"
import Home from "./pages/Home"
import Join from "./pages/Join"
import Layout from "./pages/Layout"
import Notfound from "./pages/Notfound"
import { createBrowserRouter } from "react-router-dom"
import Logout from "./pages/Logout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/*",
        element: <Notfound />,
      },
    ],
  },
])
