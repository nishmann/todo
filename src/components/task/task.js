import "./task.css";

const Task = ({label, onDeleted, onToggleDone, done}) => {
    let classNames = "";
    if (done) {
        classNames += "completed"
    }
    return (
        <li className={classNames}>
            <div className="view">
                <input className="toggle"
                       onChange={onToggleDone}
                       type="checkbox"/>
                <label>
                        <span className="description"
                              onClick={onToggleDone}>
                            {label}
                        </span>
                    <span className="created">created 5 minutes ago</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"
                        onClick={onDeleted}></button>
            </div>
        </li>
    );
}

export default Task;
