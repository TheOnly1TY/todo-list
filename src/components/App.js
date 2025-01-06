import { useState } from "react";

import { EmptyTodoList } from "./EmptyTodoList";
import { Header } from "./Header";
import { Title } from "./Title";
import { ThemeIcon } from "./ThemeIcon";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { NoOfItemsLeft } from "./NoOfItemsLeft";
import { ClearCompleted } from "./ClearCompleted";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoText) return;
    const addTodo = { text: todoText, checked: false };
    setTodoList((todo) => [...todo, addTodo]);
    setTodoText("");
  };

  return (
    <div className="App">
      <Header>
        <Title />
        <ThemeIcon />
      </Header>
      <TodoForm
        handleAddTodo={handleAddTodo}
        todoText={todoText}
        setTodoText={setTodoText}
      />
      <TodoList>
        {todoList.length === 0 ? (
          <EmptyTodoList />
        ) : (
          todoList.map((todoItem, id) => (
            <TodoItem
              todoItem={todoItem}
              key={id}
              todoList={todoList}
              onTodoList={setTodoList}
            />
          ))
        )}

        <div className="todo-control">
          <NoOfItemsLeft todoList={todoList} />
          <FilterButtons className="desktop" />
          <ClearCompleted onTodoList={setTodoList} />
        </div>
      </TodoList>
      <FilterButtons todoList={todoList} className="mobile" />
    </div>
  );
}

function TodoItem({ todoItem, todoList, onTodoList }) {
  const [showIcon, setShowIcon] = useState(false);
  const handleChecked = (todoItem) => {
    onTodoList(
      todoList.map((todo) =>
        todo === todoItem ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleRemoveTodo = (todoItem) => {
    onTodoList(todoList.filter((todo) => todoItem.text !== todo.text));
  };

  return (
    <>
      <div
        className="todos"
        onMouseEnter={() => setShowIcon(true)}
        onMouseLeave={() => setShowIcon(false)}
      >
        <div className="todo-item">
          <figure
            className={`check-icon ${todoItem.checked && "checked-background"}`}
            onClick={() => handleChecked(todoItem)}
          >
            {todoItem.checked && (
              <img src="images/icon-check.svg" alt="check icon" />
            )}
          </figure>
          <p className={`todo-text ${todoItem.checked && "checked-text"}`}>
            {todoItem.text}
          </p>
        </div>
        {showIcon && (
          <figure
            className="cancel-icon"
            onClick={() => handleRemoveTodo(todoItem)}
          >
            <img src="images/icon-cross.svg" alt="cancel icon" />
          </figure>
        )}
      </div>
      <div className="line"></div>
    </>
  );
}

function FilterButtons({ className, todoList }) {
  return (
    <div className={`filter-buttons ${className}`}>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
