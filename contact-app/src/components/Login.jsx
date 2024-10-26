import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(userCredential.user));
      navigate('/contacts');
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(login(result.user));
      navigate('/contacts');
    } catch (error) {
      console.error(error);
      alert('Google login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleEmailLogin}
          className="w-full py-3 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
        >
          Login with Email
        </button>
        <div className="text-center mb-4 text-gray-600">or</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none transition duration-200"
        >
          Login with Google
        </button>
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account? 
          <a href="/signup" className="text-blue-600 hover:underline ml-1">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
