import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contacts.slice';
import { filterReduser } from './filter/filter.slise';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
