import React, { Component } from 'react';

import NewTaskForm from '../NewTaskForm';
import './app.css';
import TaskList from '../TaskList';
import Footer from '../Footer';

class App extends Component {
  countId = 100;

  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem('Learn', 0, 0),
        this.createTodoItem('Sleep', 0, 0),
        this.createTodoItem('Drink', 0, 0),
      ],
      filter: 'all',
    };
  }

  changeTaskForm = (id, label) => {
    this.setState(({ todoData }) => {
      const newItem = todoData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            label,
            isEditing: false,
            done: false,
          };
        }
        return item;
      });
      return {
        todoData: newItem,
      };
    });
  };

  editingItem = (id) => {
    this.setState(({ todoData }) => {
      const newItem = todoData.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isEditing: true,
          };
        }
        return item;
      });
      return {
        todoData: newItem,
      };
    });
  };

  addNewItem = (text, min, sec) => {
    this.setState(({ todoData }) => {
      const newItem = this.createTodoItem(text, min, sec);
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

  createTodoItem(label, min, sec) {
    return {
      label,
      done: false,
      id: this.countId++,
      time: new Date(),
      min: Number(min),
      sec: Number(sec),
      isEditing: false,
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
          <TaskList
            todos={onFilter}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onEditingItem={this.editingItem}
            onChangeTaskForm={this.changeTaskForm}
          />
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
