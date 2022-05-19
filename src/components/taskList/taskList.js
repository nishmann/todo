import "./taskList.css";
import Task from "../task";
import React from "react";
import PropTypes from "prop-types";

const TaskList = ({todos, onDeleted, onToggleDone}) => {
    const element = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <React.Fragment key={id}>
                <Task {...itemProps}
                      onDeleted={() => onDeleted(id)}
                      onToggleDone={() => onToggleDone(id)}  />
            </React.Fragment>
        );
    })

    return (
        <ul className="todo-list">
            {element}
        </ul>
    );
}

TaskList.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleDone: () => {}
}

TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func
}

export default TaskList;
