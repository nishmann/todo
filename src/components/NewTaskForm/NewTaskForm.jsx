import React, { useState } from 'react';
import './newTaskForm.css';
import PropTypes from 'prop-types';

function NewTaskForm({ addItem }) {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onSubmitChange = (event) => {
    event.preventDefault();
    if (value.trim()) {
      addItem(value, min, sec);
    }
    setValue('');
    setMin('');
    setSec('');
  };
  return (
    <div className="header">
      <h1>todos hooks</h1>
      <form className="new-todo-form" onSubmit={(event) => onSubmitChange(event)}>
        <input
          className="new-todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <input
          className="new-todo-form__timer"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          placeholder="Min"
        />
        <input
          className="new-todo-form__timer"
          value={sec}
          onChange={(e) => setSec(e.target.value)}
          placeholder="Sec"
        />
        <button type="submit" hidden />
      </form>
    </div>
  );
}

NewTaskForm.propsTypes = {
  addItem: PropTypes.func.isRequired,
};

export default NewTaskForm;
