import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {



  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium ${
      isActive ? "text-white" : "text-yellow-500"
    } hover:text-white`;



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
              Dashboard
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
            <NavLink to="/signout" className={navLinkClass}>
              Sign Out
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={navLinkClass}>
              <img
                src="https://i.pravatar.cc/40"
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
