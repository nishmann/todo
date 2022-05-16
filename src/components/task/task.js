import React, {Component} from "react";
import "./task.css";

class Task extends Component {
    state = {
        done: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    render() {
        const {label, onDeleted} = this.props;
        const {done} = this.state;
        let classNames = ""
        if (done) {
            classNames += "completed"
        }
        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle"
                           onChange={this.onLabelClick}
                           type="checkbox"/>
                    <label>
                        <span className="description"
                              onClick={this.onLabelClick}>
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
}

export default Task;
