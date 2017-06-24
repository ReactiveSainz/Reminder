import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from './actions';
import './styles/App.css';
import Header from './components/Header';
import ReminderForm from './components/ReminderForm';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      date: '',
    };
    this.onChange = this.onChange.bind(this);
    this.addReminder = this.addReminder.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.resetState = this.resetState.bind(this);
    this.clearReminders = this.clearReminders.bind(this);
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.addReminder();
    }
  }
  resetState() {
    this.setState({
      text: '',
      date: '',
    });
  }
  addReminder() {
    this.props.addReminder(this.state.text, this.state.date);
    this.resetState();
  }
  deleteReminder(id) {
    this.props.deleteReminder(id);
  }
  clearReminders(){
    this.props.clearReminders();
  }
  render() {
    const makeDate = dateString => moment(new Date(dateString)).fromNow();
    return (
      <div className="App">
        <Header />
        <ReminderForm
          onChange={this.onChange}
          text={this.state.text}
          onClick={this.addReminder}
          onKeyPress={this.onKeyPress}
        />
        {
          <ul className="list-group col-sm-3">
            {
              this.props.reminders.map(reminder => (
                <li key={reminder.id} className="list-group-item">
                  <div className="list-item">
                    <div>{reminder.text}</div>
                    <div>{makeDate(reminder.date)}</div>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className="list-item button-delete"
                    onClick={() => this.deleteReminder(reminder.id)}
                  >
                      &#x2715;
                  </div>
                </li>
              ))
            }
          </ul>
        }
        <div
          className="btn btn-danger"
          onClick={this.clearReminders}
        >
          Clear Reminders
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    reminders: state,
  };
}

App.propTypes = {
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  clearReminders: PropTypes.func.isRequired,
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
