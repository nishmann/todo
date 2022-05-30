import React, { Component } from 'react';
import './newTaskForm.css';
import PropTypes from 'prop-types';

class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmitChange = (e) => {
    e.preventDefault();
    const { addItem } = this.props;
    const { value } = this.state;
    addItem(value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmitChange}>
          <input className="new-todo" value={value} onChange={this.handleChange} placeholder="What needs to be done?" />
          <input className="new-todo-form__timer" placeholder="Min" />
          <input className="new-todo-form__timer" placeholder="Sec" />
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
