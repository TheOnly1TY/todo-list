export function NoOfItemsLeft({ todoList }) {
  const NoItemsLeft = todoList.filter((todo) => todo.checked === false).length;
  return <p>{`${NoItemsLeft} items left`}</p>;
}
