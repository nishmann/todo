import NewTaskForm from "../newTaskForm";
import "./app.css";
import TaskList from "../taskList";
import Footer from "../footer";

const App = () => {
    const todoData = [
        {id: 1, label: "Learn JavaScript"},
        {id: 2, label: "Learn TypeScript"},
        {id: 3, label: "Drink Coffee"}
    ]

    return (
        <section className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList todos={todoData}/>
                <Footer />
            </section>
        </section>
    );
}

export default App;
