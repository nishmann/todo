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

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onSubmitChange = (event) => {
    event.preventDefault();
    const { addItem } = this.props;
    const { value } = this.state;
    if (value.trim()) {
      addItem(value);
    }
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmitChange}>
          <input className="new-todo" value={value} onChange={this.handleChange} placeholder="What needs to be done?" />
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
