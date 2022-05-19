import React from "react";
import "./tasksFilter.css";
import PropTypes from "prop-types";

class TasksFilter extends React.Component {
    state = {
        buttons: [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'completed', label: 'Completed'}
        ]
    }

    static defaultProps = {
        onFilterChange: () => {},
        filter: "all"
    }

    static propTypes = {
        onFilterChange: PropTypes.func,
        filter: PropTypes.string
    }

    render() {
        const {filter, onFilterChange} = this.props;
        const {buttons} = this.state;
        const filterBtn = buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'selected' : '';
            return (
                <li key={name}>
                    <button type='button' className={clazz} onClick={() => onFilterChange(name)}>
                        {label}
                    </button>
                </li>
            )
        });

        return (
            <ul className="filters">
                {filterBtn}
            </ul>
        );
    }
}

export default TasksFilter;
