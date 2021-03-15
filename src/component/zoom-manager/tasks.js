import Task from "./task";

const Tasks = ({ tasks, onDelete, setUpdate, setUpdateID }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          setUpdate={setUpdate}
          setUpdateID={setUpdateID}
        />
      ))}
    </div>
  );
};

export default Tasks;
