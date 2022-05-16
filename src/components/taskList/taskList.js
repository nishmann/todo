import "./taskList.css";
import Task from "../task";

const TaskList = ({todos}) => {
    const element = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <Task {...itemProps}/>
            </li>
        );
    })

    return (
        <ul className="todo-list">
            {element}
        </ul>
    );
}

export default TaskList;
