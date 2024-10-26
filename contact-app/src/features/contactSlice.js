import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../config/firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const querySnapshot = await getDocs(collection(db, 'contacts'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts[index] = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
  }
});

export const { addContact, removeContact, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
