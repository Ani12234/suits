// import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex justify-center items-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/908969308/photo/mens-suits.jpg?s=612x612&w=0&k=20&c=RB_Qn7TWf2ZFZjqdXtnlTiyG6i4qkqLoiDHmx2PjGzY=')`, // Replace with your image URL
      }}
    >
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to SuitSpot</h1>
        <p className="text-lg">Your ultimate destination for premium suits.</p>
      </div>
    </section>
  );
};

export default Hero;
