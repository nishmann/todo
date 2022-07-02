import './app.css';

import { useEffect, useState } from 'react';

import TaskList from '../TaskList';
import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';

let countId = 100;

const tasksData = [
  {
    label: 'Learn',
    min: 0,
    sec: 0,
    done: false,
    id: countId++,
    time: new Date(),
    isEditing: false,
    timer: false,
  },
  {
    label: 'Learn',
    min: 0,
    sec: 0,
    done: false,
    id: countId++,
    time: new Date(),
    isEditing: false,
    timer: false,
  },
  {
    label: 'Learn',
    min: 0,
    sec: 0,
    done: false,
    id: countId++,
    time: new Date(),
    isEditing: false,
    timer: false,
  },
];

function App() {
  const [todoData, setTodoData] = useState(tasksData);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const watchTime = setInterval(() => {
      const newItem = todoData.map((item) => {
        if (item.timer) {
          if (item.sec === 59) {
            return {
              ...item,
              sec: 0,
              min: item.min + 1,
            };
          }
          return {
            ...item,
            sec: item.sec + 1,
          };
        }
        return item;
      });
      setTodoData(newItem);
    }, 1000);
    return clearInterval(watchTime);
  }, [todoData]);

  const changeTaskForm = (id, label) => {
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
    setTodoData(newItem);
  };

  const editingItem = (id) => {
    const newItem = todoData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isEditing: true,
        };
      }
      return item;
    });
    setTodoData(newItem);
  };

  const addNewItem = (text, min, sec) => {
    const newItem = {
      label: text,
      min: Number(min),
      sec: Number(sec),
      done: false,
      id: countId++,
      time: new Date(),
      isEditing: false,
      timer: false,
    };
    setTodoData(todoData.concat(newItem));
  };

  const deleteItem = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
    setTodoData(newArray);
  };

  const deleteAll = () => {
    const newItem = todoData.filter((item) => !item.done);
    setTodoData(newItem);
  };

  const startTimer = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, timer: true };
    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
    setTodoData(newArray);
  };

  const stopTimer = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, timer: false };
    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
    setTodoData(newArray);
  };

  const onToggleDone = (id) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, done: !oldItem.done };
    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
    setTodoData(newArray);
  };

  const onFilterChange = (value) => {
    setFilter(value);
  };

  const filterTask = () => {
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
  };

  const activeTasks = todoData.filter((item) => !item.done).length;
  const onFilter = filterTask();
  return (
    <section className="todoapp">
      <NewTaskForm addItem={addNewItem} />
      <section className="main">
        <TaskList
          todos={onFilter}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
          onEditingItem={editingItem}
          onChangeTaskForm={changeTaskForm}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
        <Footer activeItem={activeTasks} deleteAll={deleteAll} onFilterChange={onFilterChange} filter={filter} />
      </section>
    </section>
  );
}

export default App;
