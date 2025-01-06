export function ClearCompleted({ onTodoList }) {
  const handleClearCompleted = () => {
    onTodoList((todo) => todo.filter((todo) => todo.checked !== true));
  };
  return (
    <button className="clear-list" onClick={handleClearCompleted}>
      Clear Completed
    </button>
  );
}
