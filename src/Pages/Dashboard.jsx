import React from "react";
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {

  const isAdmin=true;
  return (
    <div className="flex ">
      <div className="w-[400px] h-screen bg-red-400">
       {isAdmin ?  <ul className="flex flex-col items-center justify-center text-white uppercase font-3xl mt-10">
          <li>
            <Link to="/dashboard/users">allUsers</Link>
          </li>
          <li>
            <Link to="/dashboard/order">all Order</Link>
          </li>
        </ul>: <ul className="flex flex-col items-center justify-center text-white uppercase font-3xl mt-10">
          <li>
            <Link to="/dashboard/cart">Carts</Link>
          </li>
          <li>
            <Link to="/dashboard/order">....</Link>
          </li>
        </ul>}
        <hr />
         <ul className="flex flex-col items-center justify-center text-white uppercase font-3xl mt-10">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>

      </div>
      <div className="w-2/3 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
