import React, { useState } from 'react';

function ChangeTaskForm({ task, onChangeTaskForm, id }) {
  const [inputValue, setInputValue] = useState(task);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (inputValue === '') {
        return null;
      }
      onChangeTaskForm(id, inputValue);
    }
    return this;
  };

  return (
    <li className="editing">
      <input
        className="edit"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyPress}
      />
    </li>
  );
}

export default ChangeTaskForm;
