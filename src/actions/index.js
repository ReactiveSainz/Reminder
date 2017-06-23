import { ADD_REMINDER } from '../constants/reminder';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  return action;
}
