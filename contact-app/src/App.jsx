import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth } from './config/firebaseConfig';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import FavoriteContacts from './components/FavoriteContact'; // Import FavoriteContacts

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out from Firebase Auth
      dispatch(logout());    // Dispatch logout action to Redux
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/contacts" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/contacts" /> : <SignUp />}
          />
          <Route
            path="/contacts"
            element={user ? <ContactList user={user} onLogout={handleLogout} /> : <Navigate to="/" />}
          />
          <Route
            path="/add-contact"
            element={user ? <AddContact user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/edit-contact/:id"
            element={user ? <EditContact user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/favorites"
            element={user ? <FavoriteContacts user={user} /> : <Navigate to="/" />} // New route for favorites
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
