import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({ name: '', surname: '', mobile: '' });

  useEffect(() => {
    const fetchContact = async () => {
      const contactDoc = doc(db, 'contacts', id);
      const contactSnapshot = await getDoc(contactDoc);
      setContact(contactSnapshot.data());
    };

    fetchContact();
  }, [id]);

  const handleUpdateContact = async (e) => {
    e.preventDefault();
    const contactDoc = doc(db, 'contacts', id);
    await updateDoc(contactDoc, contact);
    navigate('/contacts'); // Redirect to the contacts list
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
      <form onSubmit={handleUpdateContact} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Surname"
          value={contact.surname}
          onChange={(e) => setContact({ ...contact, surname: e.target.value })}
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Mobile"
          value={contact.mobile}
          onChange={(e) => setContact({ ...contact, mobile: e.target.value })}
          className="w-full p-2 border rounded-md"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Update Contact
        </button>
      </form>
    </div>
  );
}

export default EditContact;
