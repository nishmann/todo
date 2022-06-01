import React from 'react';

class ChangeTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
    };
  }

  onKeyPress = (event) => {
    const { newTask } = this.state;
    const { onChangeTaskForm, id } = this.props;
    if (event.key === 'Enter') {
      if (newTask === '') {
        return null;
      }
      onChangeTaskForm(id, newTask);
    }
    return false;
  };

  render() {
    const { task } = this.props;
    return (
      <li className="editing">
        <input
          className="edit"
          placeholder={task}
          onKeyDown={this.onKeyPress}
          onChange={(e) => this.setState({ newTask: e.target.value })}
        />
      </li>
    );
  }
}

export default ChangeTaskForm;
