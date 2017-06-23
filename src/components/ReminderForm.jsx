import React from 'react';
import { PropTypes } from 'prop-types';

const ReminderForm = ({ onChange, value, onClick }) => (
  <div className="form-inline">
    <div className="form-group">
      <input
        className="form-control"
        placeholder="I have to...."
        onChange={onChange}
        value={value}
      />
    </div>
    <button type="Button" className="btn btn-success" onClick={onClick}>
      Add Reminder
    </button>
  </div>
);


ReminderForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ReminderForm;
