import "./footer.css";
import TasksFilter from "../tasksFilter";

const Footer = ({activeItem, deleteAll, onFilterChange, filter}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{activeItem} items left</span>
            <TasksFilter onFilterChange={onFilterChange}
                         filter={filter}
            />
            <button className="clear-completed"
                    onClick={deleteAll}>
                Clear completed</button>
        </footer>
    );
}

export default Footer;
