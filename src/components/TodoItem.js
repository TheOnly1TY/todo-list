import { useState } from "react";

export function TodoItem({ todoItem, todoList, onTodoList }) {
  const [showCancelIcon, setShowCancelIcon] = useState(false);
  const handleToggleTodo = (todoItem) => {
    onTodoList(
      todoList.map((todo) =>
        todo === todoItem ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleRemoveTodo = (todoItem) => {
    onTodoList(todoList.filter((todo) => todo !== todoItem));
  };

  return (
    <>
      <div
        className="todos"
        draggable="true"
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
