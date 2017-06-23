import React from 'react';
import { PropTypes } from 'prop-types';

const ReminderForm = ({ onChange, text, onClick, onKeyPress }) => (
  <div className="form-inline ReminderForm">
    <div className="form-group">
      <input
        className="form-control"
        name="text"
        placeholder="I have to...."
        onChange={onChange}
        value={text}
        onKeyPress={onKeyPress}
      />
      <input
        className="form-control"
        name="date"
        type="datetime-local"
        onChange={onChange}
      />
    </div>
    <button type="Button" className="btn btn-success" onClick={onClick}>
      Add Reminder
    </button>
  </div>
);


ReminderForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ReminderForm;
