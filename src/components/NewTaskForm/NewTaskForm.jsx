import React, { Component } from 'react';
import './newTaskForm.css';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      min: '',
      sec: '',
    };
  }

  handleChangeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleChangeMin = (e) => {
    this.setState({
      min: e.target.value,
    });
  };

  handleChangeSec = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  onSubmitChange = (event) => {
    const { addItem } = this.props;
    const { value, min, sec } = this.state;
    event.preventDefault();
    if (value.trim()) {
      addItem(value, min, sec);
    }
    this.setState({
      value: '',
      min: '',
      sec: '',
    });
  };

  render() {
    const { value, min, sec } = this.state;
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={(event) => this.onSubmitChange(event)}>
          <input
            className="new-todo"
            value={value}
            onChange={this.handleChangeValue}
            placeholder="What needs to be done?"
          />
          <input className="new-todo-form__timer" value={min} onChange={this.handleChangeMin} placeholder="Min" />
          <input className="new-todo-form__timer" value={sec} onChange={this.handleChangeSec} placeholder="Sec" />
          <button type="submit" hidden />
        </form>
      </div>
    );
  }
}

NewTaskForm.propsTypes = {
  addItem: PropTypes.func.isRequired,
};

export default NewTaskForm;
