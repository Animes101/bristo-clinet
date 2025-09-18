import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { AuthContext } from "../../context/AuthProvider";
import Swal from 'sweetalert2'
import { useContext } from "react";
import useCart from "../../hooks/useCart";

const Navbar = () => {

  const {user, logout}=useContext(AuthContext);

  const {isPending, error, cart}=useCart();
  






  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium ${
      isActive ? "text-white" : "text-yellow-500"
    } hover:text-white`;



    // logout 
    const handleLogout=()=>{

      logout();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

    }


  return (
    <div className="navbar bg-black bg-opacity-60 shadow-sm fixed top-0 left-0 w-full z-50 px-10">
      <div className="flex-1">
        <NavLink
          to="/"
          className="text-xl text-white"
        >
          <img src={logo} alt="Logo" className="h-8" />
          <h1>Bristo Boss</h1>
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard {cart.length}
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={navLinkClass}>
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={navLinkClass}>
              Our Shop
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="bg-yellow-400 p-5">
              Sign Out {user?.email}
            </button>
          </li>
          <li>
            <NavLink to="/profile" className={navLinkClass}>
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full border border-white"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
