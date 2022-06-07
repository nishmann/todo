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
    event.preventDefault();
    const { addItem } = this.props;
    const { value, min, sec } = this.state;
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
        <form className="new-todo-form" onSubmit={this.onSubmitChange}>
          <input
            className="new-todo"
            value={value}
            onChange={(e) => this.handleChangeValue(e)}
            placeholder="What needs to be done?"
          />
          <input
            className="new-todo-form__timer"
            value={min}
            onChange={(e) => this.handleChangeMin(e)}
            placeholder="Min"
          />
          <input
            className="new-todo-form__timer"
            value={sec}
            onChange={(e) => this.handleChangeSec(e)}
            placeholder="Sec"
          />
        </form>
      </div>
    );
  }
}

NewTaskForm.propsTypes = {
  addItem: PropTypes.func.isRequired,
};

export default NewTaskForm;
