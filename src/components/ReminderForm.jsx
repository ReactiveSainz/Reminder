import React from 'react';

const ReminderForm = ({onChange, value, onClick}) =>{
  return(
    <div className='form-inline'>
      <div className='form-group'>
        <input className='form-control' placeholder='I have to....' onChange={onChange} value={value} />
      </div>
      <button type='Button' className='btn btn-success' onClick={onClick}>
        Add Reminder
      </button>
    </div>
  )
}
export default ReminderForm;
