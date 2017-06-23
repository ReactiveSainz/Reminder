import { ADD_REMINDER, DELETE_REMINDER } from '../constants/reminder';

export const addReminder = (text, date) => {
  const action = {
    type: ADD_REMINDER,
    text,
    date,
  };
  return action;
};

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id,
  };
  return action;
};
