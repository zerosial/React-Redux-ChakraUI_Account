import { createBrowserRouter } from "react-router-dom"
import Notfound from "./pages/Notfound"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Join from "./pages/Join"

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
        path: "/*",
        element: <Notfound />,
      },
    ],
  },
])
