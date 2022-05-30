import React, { Component } from 'react';

import NewTaskForm from '../newTaskForm';
import './app.css';
import TaskList from '../taskList';
import Footer from '../footer';

class App extends Component {
  countId = 100;

  constructor() {
    super();
    this.state = {
      todoData: [this.createTodoItem('Learn'), this.createTodoItem('Sleep'), this.createTodoItem('Drink')],
      filter: 'all',
    };
  }

  addNewItem = (text) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text);
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  deleteAll = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((item) => !item.done),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterTask() {
    const { filter, todoData } = this.state;
    switch (filter) {
      case 'all':
        return todoData;
      case 'active':
        return todoData.filter((item) => !item.done);
      case 'completed':
        return todoData.filter((item) => item.done);
      default:
        return todoData;
    }
  }

  createTodoItem(label) {
    return {
      label,
      done: false,
      id: this.countId++,
      time: new Date(),
    };
  }

  render() {
    const { todoData, filter } = this.state;
    const activeTasks = todoData.filter((item) => !item.done).length;
    const onFilter = this.filterTask();
    return (
      <section className="todoapp">
        <NewTaskForm addItem={this.addNewItem} />
        <section className="main">
          <TaskList todos={onFilter} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
          <Footer
            activeItem={activeTasks}
            deleteAll={this.deleteAll}
            onFilterChange={this.onFilterChange}
            filter={filter}
          />
        </section>
      </section>
    );
  }
}

export default App;
