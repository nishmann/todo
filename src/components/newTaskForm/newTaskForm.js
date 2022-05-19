import React, {Component} from "react";
import "./newTaskForm.css";
import PropTypes from "prop-types";

class NewTaskForm extends Component {
    state = {
        value: ""
    }

    static defaultProps = {
        handleChange: () => {},
        onSubmitChange: () => {}
    }

    static propsTypes = {
        handleChange: PropTypes.func,
        onSubmitChange: PropTypes.func
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onSubmitChange = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.value);
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <div className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmitChange}>
                    <input className="new-todo"
                           value={this.state.value}
                           onChange={this.handleChange}
                           placeholder="What needs to be done?" autoFocus/>
                </form>
            </div>
        );
    }
}

export default NewTaskForm;
