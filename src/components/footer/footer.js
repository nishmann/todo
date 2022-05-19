import "./footer.css";
import TasksFilter from "../tasksFilter";
import PropTypes from "prop-types";

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

Footer.defaultProps = {
    activeItem: 0,
    deleteAll: () => {},
    onFilterChange: () => {},
    filter: "all"
}

Footer.propsTypes = {
    activeItem: PropTypes.number,
    deleteAll: PropTypes.func,
    onFilterChange: PropTypes.func,
    filter: PropTypes.string
}

export default Footer;
