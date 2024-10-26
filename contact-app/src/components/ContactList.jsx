import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { FaEdit, FaTrash, FaHeart, FaUser } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function ContactList({ user, onLogout }) {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mobile, setMobile] = useState('');
  const [editingContactId, setEditingContactId] = useState(null);

  // Fetch contacts on load
  useEffect(() => {
    if (!user) return;

    const userContactsRef = collection(db, `users/${user.uid}/contacts`);
    const unsubscribe = onSnapshot(userContactsRef, (snapshot) => {
      const contactList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactList);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [user]);

  // Add or update contact
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !mobile) {
      alert("Please fill all fields");
      return;
    }

    try {
      const userContactsRef = collection(db, `users/${user.uid}/contacts`);

      if (editingContactId) {
        // Update existing contact
        const contactDoc = doc(userContactsRef, editingContactId);
        await updateDoc(contactDoc, { name, surname, mobile });
        console.log("Contact updated:", { name, surname, mobile });
      } else {
        // Add new contact
        await addDoc(userContactsRef, { name, surname, mobile, isFavorite: false }); // Set default favorite status
        console.log("Contact added:", { name, surname, mobile });
      }

      // Clear input fields and reset editing state
      setName('');
      setSurname('');
      setMobile('');
      setEditingContactId(null); // Reset the editing ID
    } catch (error) {
      console.error('Error saving contact:', error);
      alert("Failed to save contact");
    }
  };

  // Edit contact
  const handleEditContact = (contact) => {
    setName(contact.name);
    setSurname(contact.surname);
    setMobile(contact.mobile);
    setEditingContactId(contact.id); // Set the ID of the contact being edited
  };

  // Delete contact by ID
  const handleDeleteContact = async (id) => {
    try {
      const contactDoc = doc(db, `users/${user.uid}/contacts`, id);
      await deleteDoc(contactDoc);
      console.log("Deleted contact with ID:", id);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  // Handle favorite contact
  const handleFavoriteContact = async (contactId) => {
    try {
      const contactDoc = doc(db, `users/${user.uid}/contacts`, contactId);
      const contactSnapshot = await getDoc(contactDoc);
      
      if (contactSnapshot.exists()) {
        const currentContact = contactSnapshot.data();
        await updateDoc(contactDoc, {
          isFavorite: !currentContact.isFavorite // Toggle favorite status
        });
        console.log(`Favorited contact with ID: ${contactId}`);
      }
    } catch (error) {
      console.error('Error favoriting contact:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with Input Form */}
      <div className="bg-purple-500 text-white w-1/4 p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <FaUser className="mr-2" /> {user.displayName}
        </h2>
        <button onClick={onLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
        <h3 className="text-lg font-semibold mt-6">{editingContactId ? "Edit Contact" : "Add New Contact"}</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
            required
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
            required
          />
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border rounded-md text-black"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            {editingContactId ? "Save Changes" : "Save Contact"}
          </button>
        </form>
        <Link to="/favorite-contacts" className="text-yellow-200 mt-4 inline-block">View Favorite Contacts</Link>
      </div>

      {/* Main content for displaying contacts */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold">Contact List</h2>
        <table className="min-w-full bg-white mt-4">
          <thead>
            <tr>
              <th className="text-left p-4">Profile</th>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Surname</th>
              <th className="text-left p-4">Mobile</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center">No contacts available.</td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact.id} className="border-b">
                  <td className="p-4"><CgProfile className='w-6 h-6 cursor-pointer' /></td>
                  <td className="p-4">{contact.name}</td>
                  <td className="p-4">{contact.surname}</td>
                  <td className="p-4">{contact.mobile}</td>
                  <td className="p-4 flex space-x-2">
                    <button onClick={() => handleDeleteContact(contact.id)} className="text-red-500">
                      <FaTrash />
                    </button>
                    <FaHeart 
                      className={`w-6 h-6 cursor-pointer ${contact.isFavorite ? 'text-red-600' : 'text-gray-500'}`} 
                      onClick={() => handleFavoriteContact(contact.id)} 
                    />
                    <FaEdit 
                      className="w-6 h-6 cursor-pointer" 
                      onClick={() => handleEditContact(contact)} 
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactList;
