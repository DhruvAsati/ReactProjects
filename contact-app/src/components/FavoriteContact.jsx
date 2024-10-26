import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { useSelector } from 'react-redux';

function FavoriteContact() {
  const user = useSelector((state) => state.user.user);
  const [favoriteContacts, setFavoriteContacts] = useState([]);

  useEffect(() => {
    if (!user) return;

    const userContactsRef = collection(db, `users/${user.uid}/contacts`);
    const unsubscribe = onSnapshot(userContactsRef, (snapshot) => {
      const contactList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })).filter(contact => contact.isFavorite); // Filter for favorite contacts

      console.log("Favorite Contacts:", contactList); // Debug log
      setFavoriteContacts(contactList);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [user]);

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold">Favorite Contacts</h2>
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Surname</th>
            <th className="text-left p-4">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {favoriteContacts.length === 0 ? (
            <tr>
              <td colSpan="3" className="p-4 text-center">No favorite contacts available.</td>
            </tr>
          ) : (
            favoriteContacts.map((contact) => (
              <tr key={contact.id} className="border-b">
                <td className="p-4">{contact.name}</td>
                <td className="p-4">{contact.surname}</td>
                <td className="p-4">{contact.mobile}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FavoriteContact;
