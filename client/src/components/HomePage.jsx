import React from 'react';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Our Application
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Please log in or register to continue.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
