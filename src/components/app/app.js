import React, {Component} from "react";
import NewTaskForm from "../newTaskForm";
import "./app.css";
import TaskList from "../taskList";
import Footer from "../footer";

class App extends Component {
    state = {
        todoData: [
            {id: 0, label: "Learn JavaScript"},
            {id: 1, label: "Learn TypeScript"},
            {id: 2, label: "Drink Coffee"}
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex(el => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        })
    }

    render() {
        const {todoData} = this.state;
        return (
            <section className="todoapp">
                <NewTaskForm/>
                <section className="main">
                    <TaskList todos={todoData}
                              onDeleted={this.deleteItem}/>
                    <Footer/>
                </section>
            </section>
        );
    }
}

export default App;
