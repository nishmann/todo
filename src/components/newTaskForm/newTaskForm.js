import React, { Component } from 'react';
import './newTaskForm.css';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      min: '',
      sec: '',
    };
  }

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value,
    });
  };

  onSubmitChange = (e) => {
    e.preventDefault();
    const { addItem } = this.props;
    const { value, min, sec } = this.state;
    if (value.trim()) {
      addItem(value, min, sec);
    }
  };

  render() {
    const { value, min, sec } = this.state;
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={(e) => this.onSubmitChange(e)}>
          <input
            className="new-todo"
            value={value}
            onChange={(e) => this.handleChange(e, 'value')}
            placeholder="What needs to be done?"
          />
          <input
            className="new-todo-form__timer"
            value={min}
            onChange={(e) => this.handleChange(e, 'min')}
            placeholder="Min"
          />
          <input
            className="new-todo-form__timer"
            value={sec}
            onChange={(e) => this.handleChange(e, 'sec')}
            placeholder="Sec"
          />
        </form>
      </div>
    );
  }
}

NewTaskForm.defaultProps = {
  handleChange: () => {},
  onSubmitChange: () => {},
};

NewTaskForm.propsTypes = {
  handleChange: PropTypes.func,
  onSubmitChange: PropTypes.func,
};

export default NewTaskForm;
