import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa'; // Importing an icon

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center p-8">
      <h1 className="text-5xl font-extrabold mb-4 animate-bounce">Welcome to Contact App</h1>
      <p className="mb-8 text-lg md:text-xl max-w-md">
        Your one-stop solution for managing contacts efficiently.
      </p>
      <div className="mb-8">
        <FaUserFriends className="text-6xl mx-auto mb-4" />
        <p className="text-lg">Connect with friends and family effortlessly.</p>
      </div>
      <button
        onClick={() => navigate('/login')}
        className="px-6 py-3 text-lg bg-blue-800 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
      >
        Get Started
      </button>
      <footer className="mt-8">
        <p className="text-sm">© 2024 YourApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
