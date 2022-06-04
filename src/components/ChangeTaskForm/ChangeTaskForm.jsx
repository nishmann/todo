import React from 'react';

class ChangeTaskForm extends React.Component {
  constructor(props) {
    super(props);
    const { task } = this.props;
    this.state = {
      inputValue: task,
    };
  }

  onHandlerInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onKeyPress = (event) => {
    const { inputValue } = this.state;
    const { onChangeTaskForm, id } = this.props;

    if (event.key === 'Enter') {
      if (inputValue === '') {
        return null;
      }
      onChangeTaskForm(id, inputValue);
    }
    return this;
  };

  render() {
    const { inputValue } = this.state;
    return (
      <li className="editing">
        <input className="edit" value={inputValue} onChange={this.onHandlerInput} onKeyDown={this.onKeyPress} />
      </li>
    );
  }
}

export default ChangeTaskForm;
