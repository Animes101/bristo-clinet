import App from "../App";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../Pages/NotFound404";
import OurMenu from "../Pages/OurManu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivetRoute";
import Dashboard from "../Pages/Dashboard";
import Cart from "../Pages/cart";
import Users from "../Pages/Users";
import Admin from "./Admin";
import AddMenu from "../Pages/AddMenu";
import Payment from "../Pages/Payment";
import ManageAllItem from "../Pages/ManageAllItem";
import UpdateMenu from "../Pages/UpdateMenu";





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
  },
  {path:'/login', element:<Login />},
  {path:'/signup', element:<Register />},
  {path:'/dashboard',
     element:<PrivateRoute><Dashboard /></PrivateRoute>,
     children :[
       {path:'/dashboard/cart', element:<Cart />},
       {path:'/dashboard/users', element: <Admin><Users /></Admin>},
       {path:'/dashboard/addmenu', element: <Admin><AddMenu /></Admin>},
       {path:'/dashboard/manag', element: <Admin><ManageAllItem /></Admin>},
       {path:'/dashboard/menu/update', element: <Admin><UpdateMenu /></Admin>},
        {path:'/dashboard/payment', element: <Payment />}
     ]
    }
]);

export default router;
