import React, { useState } from 'react';
import './tasksFilter.css';
import PropTypes from 'prop-types';

function TasksFilter({ filter, onFilterChange }) {
  const [buttons] = useState([
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]);

  const filterBtn = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? 'selected' : '';
    return (
      <li key={name}>
        <button type="button" className={clazz} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{filterBtn}</ul>;
}

TasksFilter.defaultProps = {
  filter: 'all',
};

TasksFilter.propTypes = {
  filter: PropTypes.string,
};

export default TasksFilter;
