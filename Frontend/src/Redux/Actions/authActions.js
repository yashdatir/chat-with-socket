import {
  ADD_NAME,
  ADD_MESSAGE,
  MANAGE_MESSAGE,
  START_CHAT,
} from '../ReduxConstants';

export const addName = (value) => {
  return {
    type: ADD_NAME,
    value,
  };
};

export const addMessage = (value) => {
  return {
    type: ADD_MESSAGE,
    value,
  };
};

export const manageMessage = (value) => {
  return {
    type: MANAGE_MESSAGE,
    value,
  };
};

export const startChat = (name) => {
  localStorage.setItem('name', name);
  return {
    type: START_CHAT,
    value: name,
  };
};
