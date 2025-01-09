export function EmptyTodoList({ filter }) {
  const getText = () => {
    if (filter === "Active") {
      return "No active task!";
    }
    if (filter === "Completed") {
      return "No completed task!";
    } else {
      return "No tasks for today!";
    }
  };
  return (
    <>
      <div className="empty-todo">
        <figure>
          <img
            src="images/empty-todolist_illustration.png"
            alt="empty todo list illustration"
          />
        </figure>
        <p>{getText()}</p>
      </div>
      <div className="line"></div>
    </>
  );
}
