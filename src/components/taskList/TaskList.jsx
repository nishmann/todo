import './taskList.css';
import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';

function TaskList({ todos, onDeleted, onToggleDone }) {
  const element = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <React.Fragment key={id}>
        {/* eslint-disable react/jsx-props-no-spreading  */}
        <Task {...itemProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)} />
      </React.Fragment>
    );
  });

  return <ul className="todo-list">{element}</ul>;
}

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onToggleDone: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      completed: PropTypes.bool,
      time: PropTypes.instanceOf(Date),
    })
  ),
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
};

export default TaskList;
