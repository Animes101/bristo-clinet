import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../Pages/NotFound404";
import About from "../Pages/About";
import OurMenu from "../Pages/OurManu";
import OurShop from "../Pages/OurShop";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {path:'/shop', element:<OurShop />},
      {path:'/menu', element:<OurMenu />}

    ],
  },
  {
    path:'*',
    element: <NotFound404 />
  }
]);

export default router;
