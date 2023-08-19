import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    add(state, action) {
      //   state.contacts = state.contacts.concat(action.payload);
      //   state.contacts = [...state.contacts, action.payload];
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      //   state.contacts = state.contacts.filter(
      //     data => data.id !== action.payload
      //     );
      return {
        ...state,
        contacts: state.contacts.filter(data => data.id !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts.contacts;
export const { add, remove } = contactsSlice.actions;
