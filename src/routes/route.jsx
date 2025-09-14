import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../Pages/NotFound404";
import About from "../Pages/About";
import OurMenu from "../Pages/OurManu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivetRoute";
import Dashboard from "../Pages/Dashboard";
import Cart from "../Pages/cart";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {path:'/shop', element:<OurShop />},
      {path:'/menu', element:<PrivateRoute><OurMenu /></PrivateRoute>}

    ],
  },
  {
    path:'*',
    element: <NotFound404 />
  },
  {path:'/login', element:<Login />},
  {path:'/signup', element:<Register />},
  {path:'/dashboard',
     element:<PrivateRoute><Dashboard /></PrivateRoute>,
     children :[
       {path:'/dashboard/cart', element:<Cart />},
      //  {path:'/dashboard/order', element:<Order />}
     ]
    }
]);

export default router;
