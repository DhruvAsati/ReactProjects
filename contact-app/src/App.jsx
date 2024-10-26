import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';
import { auth } from './config/firebaseConfig';
import Home from './components/Home';
import Login from './components/Login'; // Ensure you import the Login component
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import FavoriteContacts from './components/FavoriteContact';

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
      await auth.signOut();
      dispatch(logout());
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/contacts" /> : <Home />} />
          <Route path="/login" element={<Login />} /> {/* Ensure the login route is here */}
          <Route path="/contacts" element={user ? <ContactList user={user} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/add-contact" element={user ? <AddContact user={user} /> : <Navigate to="/" />} />
          <Route path="/edit-contact/:id" element={user ? <EditContact user={user} /> : <Navigate to="/" />} />
          <Route path="/favorites" element={user ? <FavoriteContacts user={user} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
