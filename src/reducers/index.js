import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants/reminder';
import { bake_cookie, read_cookie } from 'sfcookies';

const makeReminder = (action) => {
  return {
    text: action.text,
    date: action.date,
    id: Math.random(),
  };
};

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  return reminders;
};

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, makeReminder(action)];
      bake_cookie('reminders', reminders);
      return reminders;
      break;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
      break;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
      break;
    default:
        return state;
  }
};

export default reminders;
