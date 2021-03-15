const Task = ({ task, onDelete, setUpdate, setUpdateID }) => {
  const onDoubleClick = () => {
    setUpdate(true);
    setUpdateID(task.id);
  };

  return (
    <div
      className={task.important ? "task-imp" : "task"}
      onDoubleClick={onDoubleClick}
    >
      {task.important && (
        <p style={{ fontWeight: "bold", color: "#ffb705" }}>important</p>
      )}
      <h3>{task.title}</h3>
      <p>{task.day}</p>
      <a href={task.textInfor}>{task.textInfor}</a>
      <div className="deleteBtn" onClick={() => onDelete(task.id)}>
        Delete
      </div>
      {/* <div style={{ color: "grey", cursor: "pointer" }} onClick={onDoubleClick}>
      </div> */}
    </div>
  );
};

export default Task;
