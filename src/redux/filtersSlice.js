import { initialState } from './initialState';

export const filterContact = filter => {
  return {
    type: 'filters/filterContacts',
    payload: filter,
  };
};

export const filterReducer = (state = initialState.filters, action) => {
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
