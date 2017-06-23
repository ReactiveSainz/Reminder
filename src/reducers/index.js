import { ADD_REMINDER, DELETE_REMINDER } from '../constants/reminder';

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
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, makeReminder(action)];
      return reminders;
      break;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
      break;
    default:
        return state;
  }
};

export default reminders;
