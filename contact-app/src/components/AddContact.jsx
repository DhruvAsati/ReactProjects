import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebaseConfig'; // Import auth if you’re using Firebase authentication

function AddContact() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mobile, setMobile] = useState('');
  const [user] = useAuthState(auth); // Get the current logged-in user
  const navigate = useNavigate();

  const handleAddContact = async (e) => {
    e.preventDefault();

    // Check if the user is authenticated
    if (!user) {
      console.error('User not authenticated');
      alert('You must be logged in to add a contact.');
      return;
    }

    try {
      // Reference the user's contacts subcollection
      const userContactsRef = collection(db, `users/${user.uid}/contacts`);

      // Add a new contact
      await addDoc(userContactsRef, {
        name,
        surname,
        mobile,
      });

      // Reset input fields
      setName('');
      setSurname('');
      setMobile('');

      // Navigate back to the contacts list
      navigate('/');
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('There was an error adding the contact. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">Add New Contact</h2>
        <form onSubmit={handleAddContact} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
