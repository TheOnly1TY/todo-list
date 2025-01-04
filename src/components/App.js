import { useState } from "react";
import { EmptyTodoList } from "./EmptyTodoList";
import { Header } from "./Header";
import { TodoForm } from "./TodoForm";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todo, setTodo] = useState([]);
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoText) return;
    const addTodo = { text: todoText, checked: false };
    setTodo((todo) => [...todo, addTodo]);
    setTodoText("");
  };
  return (
    <div className="App">
      <Header />
      <TodoForm
        handleAddTodo={handleAddTodo}
        todoText={todoText}
        setTodoText={setTodoText}
      />
      <TodoList>
        {todo.length === 0 ? (
          <EmptyTodoList />
        ) : (
          todo.map((todo, id) => (
            <TodoItem
              todo={todo}
              onTodo={setTodo}
              handleRemoveTodo={handleRemoveTodo}
              key={id}
            />
          ))
        )}

        <div className="todo-control">
          <NoOfItemsLeft />
          <FilterButtons className="desktop" />
          <ClearCompleted />
        </div>
      </TodoList>
      <FilterButtons className="mobile" />
    </div>
  );
}

function TodoList({ children }) {
  return <div className="todo-list">{children}</div>;
}
function NoOfItemsLeft() {
  return <p>5 items left</p>;
}

function ClearCompleted() {
  return <button className="clear-list">Clear Completed</button>;
}

function TodoItem({ todo, handleRemoveTodo }) {
  const handleChecked = () => {};
  return (
    <>
      <div className="todos">
        <div className="todo-item">
          <figure className="check-icon" onClick={handleChecked}>
            <img src="images/icon-check.svg" alt="check icon" />
          </figure>
          <p className="todo-text">{todo.text}</p>
        </div>
        <figure className="cancel-icon" onClick={handleRemoveTodo}>
          <img src="images/icon-cross.svg" alt="cancel icon" />
        </figure>
      </div>
      <div className="line"></div>
    </>
  );
}

function FilterButtons({ className }) {
  return (
    <div className={`filter-buttons ${className}`}>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
