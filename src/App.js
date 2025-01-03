import { Header } from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

function TodoForm() {
  return (
    <div className="todo-form">
      <button></button>
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
}

function TodoList() {
  return (
    <div className="todo-list">
      <TodoItem />
      <div className="todo-control">
        <p>5 items left</p>
        <FilterButtons />
        <p>Clear Completed</p>
      </div>
    </div>
  );
}

function TodoItem() {
  return (
    <>
      <div className="todos">
        <div className="todo-item">
          <figure className="check-icon">
            <img src="images/icon-check.svg" alt="check icon" />
          </figure>
          <p className="todo-text">Pick up the groceries</p>
        </div>
        <figure>
          <img src="images/icon-cross.svg" alt="cancel icon" />
        </figure>
      </div>
      <div className="line"></div>
    </>
  );
}

function FilterButtons() {
  return (
    <div className="filter-buttons">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
