import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex items-center justify-between py-4">
        <div className="text-xl font-bold text-gray-800 hover:text-blue-500">
          <Link to="/">Redux Essentials By Jhondel</Link>
        </div>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-gray-800 hover:text-blue-500 ${isActive ? "text-blue-500 underline " : ""}`
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-800 hover:text-blue-500 ${isActive ? "text-blue-500 underline " : ""}`
            }
          >
            About
          </NavLink>
        </div>
      </div>

      <hr className="border-gray-300" />
    </div>
  );
};
