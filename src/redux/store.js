import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  filters: {
    name: '',
  },
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

export const filterContact = filter => {
  return {
    type: 'filters/filterContacts',
    payload: filter,
  };
};

const contactsReducer = (state = initialState.contacts, action) => {
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

const filterReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case 'filters/filterContacts':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
