import './taskList.css';
import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task';
import ChangeTaskForm from '../ChangeTaskForm';

function TaskList({ todos, onDeleted, onToggleDone, onChangeTaskForm, onEditingItem, stopTimer, startTimer }) {
  const element = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <React.Fragment key={id}>
        {/* eslint-disable react/jsx-props-no-spreading  */}
        {item.isEditing ? (
          <ChangeTaskForm task={item.label} id={id} onChangeTaskForm={onChangeTaskForm} />
        ) : (
          <Task
            {...itemProps}
            onEditingItem={() => onEditingItem(id)}
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
            startTimer={() => startTimer(id)}
            stopTimer={() => stopTimer(id)}
          />
        )}
      </React.Fragment>
    );
  });

  return <ul className="todo-list">{element}</ul>;
}

TaskList.defaultProps = {
  todos: [],
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
};

export default TaskList;
