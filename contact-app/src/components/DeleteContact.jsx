import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

function DeleteContact({ contactId, onContactDeleted }) {
  const deleteContact = async () => {
    try {
      await deleteDoc(doc(db, 'contacts', contactId));
      onContactDeleted(); // Notify the parent component to refresh the contact list
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <button onClick={deleteContact} className="text-red-500">
      Delete
    </button>
  );
}

export default DeleteContact;
