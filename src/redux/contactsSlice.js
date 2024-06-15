import { initialState } from './initialState';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');

export const contactsReducer = createReducer(
  initialState.contacts,
  builder => {
    builder
      .addCase(addContact, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  }
);

