import React from "react";
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
  return (
    <div className="flex ">
      <div className="w-[400px] h-screen bg-red-400">
        <ul>
          <li>
            <Link to="/dashboard/cart">cart</Link>
          </li>
          <li>
            <Link to="/dashboard/order">order</Link>
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
