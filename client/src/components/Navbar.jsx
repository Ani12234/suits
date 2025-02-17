import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">AppName</div>
      <div>
        <Link
          to="/auth/login"
          className="text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          className="text-white px-4 py-2 rounded-md hover:bg-gray-600 ml-4"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
