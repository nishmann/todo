import "./taskList.css";
import Task from "../task";
import React from "react";

const TaskList = ({todos, onDeleted}) => {

    const element = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <React.Fragment key={id}>
                <Task {...itemProps}
                      onDeleted={() => onDeleted(id)}/>
            </React.Fragment>
        );
    })

    return (
        <ul className="todo-list">
            {element}
        </ul>
    );
}

export default TaskList;
