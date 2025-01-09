import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { ThemeIcon } from "./components/ThemeIcon";
import { TodoForm } from "./components/TodoForm";
import { EmptyTodoList } from "./components/EmptyTodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { NoOfItemsLeft } from "./components/NoOfItemsLeft";
import { FilterButtons } from "./components/FilterButtons";
import { ClearCompleted } from "./components/ClearCompleted";

export default function App() {
  const getData = () => {
    const data = JSON.parse(localStorage.getItem("TodoList"));
    if (data) {
      return JSON.parse(localStorage.getItem("TodoList"));
    } else {
      return [];
    }
  };

  // STATES
  const [todoList, setTodoList] = useState(getData());
  const [todoText, setTodoText] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoList));
  }, [todoList]);

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
          <EmptyTodoList filter={filter} />
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
