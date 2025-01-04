export function EmptyTodoList() {
  return <>
    <div className="empty-todo">
      <figure>
        <img src="images/empty-todolist_illustration.png" alt="empty todo list illustration" />
      </figure>
      <p>No tasks for today!</p>
    </div>
    <div className="line"></div>
  </>;
}
