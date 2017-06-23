import { PropTypes } from 'prop-types';
import React from 'react';

const ReminderList = ({ reminders }) => (
  <div>
    <ul>
      { reminders.map(reminder => <li key={reminder.id} >reminder.text</li>) }
    </ul>
  </div>
);

ReminderList.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReminderList;
