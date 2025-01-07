import { useState } from "react";

import { Header } from "./Header";
import { Title } from "./Title";
import { ThemeIcon } from "./ThemeIcon";
import { TodoForm } from "./TodoForm";
import { EmptyTodoList } from "./EmptyTodoList";
import { TodoList } from "./TodoList";
import { NoOfItemsLeft } from "./NoOfItemsLeft";
import { FilterButtons } from "./FilterButtons";
import { ClearCompleted } from "./ClearCompleted";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoText) return;

    const addTodo = {
      id: new Date().getTime(),
      text: todoText,
      checked: false,
    };
    setTodoList((todo) => [...todo, addTodo]);
    setTodoText("");
  };

  const filteredTodoList = todoList.filter((todo) => {
    if (filter === "Active") return !todo.checked;
    if (filter === "Completed") return todo.checked;
    return true;
  });

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
        {filteredTodoList.length === 0 ? (
          <EmptyTodoList />
        ) : (
          filteredTodoList.map((todoItem, id) => (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              todoList={todoList}
              onTodoList={setTodoList}
            />
          ))
        )}

        <div className="todo-control">
          <NoOfItemsLeft todoList={todoList} />
          <FilterButtons
            screenSize="desktop"
            filter={filter}
            setFilter={setFilter}
          />
          <ClearCompleted onTodoList={setTodoList} />
        </div>
      </TodoList>
      <FilterButtons
        screenSize="mobile"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

function TodoItem({ todoItem, todoList, onTodoList }) {
  const [showCancelIcon, setShowCancelIcon] = useState(false);
  const handleToggleTodo = (todoItem) => {
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
        onMouseEnter={() => setShowCancelIcon(true)}
        onMouseLeave={() => setShowCancelIcon(false)}
      >
        <div className="todo-item">
          <figure
            className={`check-icon ${todoItem.checked && "checked-background"}`}
            onClick={() => handleToggleTodo(todoItem)}
          >
            {todoItem.checked && (
              <img src="images/icon-check.svg" alt="check icon" />
            )}
          </figure>
          <p className={`todo-text ${todoItem.checked && "checked-text"}`}>
            {todoItem.text}
          </p>
        </div>

        {showCancelIcon && (
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
