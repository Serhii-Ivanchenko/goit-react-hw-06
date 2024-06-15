import { initialState } from './initialState';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const filterContact = createAction('filters/filterContacts');

export const filterReducer = createReducer(initialState.filters, builder => {
  builder.addCase(filterContact, (state, action) => {
    state.name = action.payload
  });
})
