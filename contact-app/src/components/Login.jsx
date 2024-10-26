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
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(login(result.user));
      navigate('/contacts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleEmailLogin}
          className="w-full py-2 mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Login with Email
        </button>
        <div className="text-center mb-4 text-gray-600">or</div>
        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
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
