import React from 'react';

class ChangeTaskForm extends React.Component {
  constructor(props) {
    super(props);
    const { task } = this.props;
    this.state = {
      newTask: task,
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
    const { newTask } = this.state;
    return (
      <li className="editing">
        <input
          className="edit"
          value={newTask}
          onKeyDown={this.onKeyPress}
          onChange={(e) => this.setState({ newTask: e.target.value })}
        />
      </li>
    );
  }
}

export default ChangeTaskForm;
