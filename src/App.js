import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from './actions';
import './styles/App.css';
import Header from './components/Header';
import ReminderForm from './components/ReminderForm';

class App extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      text: ''
    }
    this.onChange = this.onChange.bind(this);
    this.addReminder = this.addReminder.bind(this);
  }
  onChange(event){
    console.log("hehehee");
    this.setState({
      text: event.target.value
    })
  }
  addReminder(event){
    this.props.addReminder(this.state.text);
  }
  render() {
    return (
      <div>
        <Header/>
        <ReminderForm onChange={this.onChange} value={this.state.text} onClick={this.addReminder}/>
      </div>
    );
  }
}

export default connect(null,{addReminder})(App);
