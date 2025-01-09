export function FilterButtons({ screenSize, filter, setFilter }) {
  return (
    <div className={`filter-buttons ${screenSize}`}>
      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        className={filter === "Active" ? "active" : ""}
        onClick={() => setFilter("Active")}
      >
        Active
      </button>
      <button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
    </div>
  );
}
