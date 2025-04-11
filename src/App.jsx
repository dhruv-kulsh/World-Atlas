import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/country",
        element: <Country />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }

])

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

