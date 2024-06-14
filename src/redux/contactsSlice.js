import { nanoid } from 'nanoid';
import { initialState } from './store';

export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = ContactId => {
  return {
    type: 'contacts/deleteContact',
    payload: ContactId,
  };
};
