export function TodoForm({ handleAddTodo, todoText, setTodoText }) {
  return (
    <form className="todo-form" onSubmit={handleAddTodo}>
      <button onClick={handleAddTodo}></button>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
    </form>
  );
}
