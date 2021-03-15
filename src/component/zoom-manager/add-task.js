import { useState } from "react";
import "./zoom.css";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [day, setDate] = useState("");
  const [important, setImportant] = useState(false);
  const [textInfor, setLink] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Meeting need a title.");
      return;
    }
    if (title.length > 30) {
      alert("Meeting title can't be longer than 30 characters.");
      return;
    }
    var today = Date.now();
    var enteredDay = new Date(day).getTime();
    if (!day) {
      alert("Meeting need a date.");
      return;
    }
    if (enteredDay < today) {
      alert("Meeting date must be today or after today.");
      return;
    }
    if (!textInfor) {
      alert("Meeting need a link to Zoom");
      return;
    }
    if (!textInfor.includes("zoom")) {
      alert("Meeting must be a valid Zoom link");
      return;
    }

    onAdd({ title, day, important, textInfor });
    setTitle("");
    setDate("");
    setImportant(false);
    setLink("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-section">
        <label>Meeting</label>
        <input
          type="text"
          placeholder="Add Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Date</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Zoom Link</label>
        <input
          type="link"
          value={textInfor}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="form-section form-section-check">
        <label>Important</label>
        <input
          type="checkbox"
          checked={important}
          value={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
        {console.log("in add: " + important)}
      </div>
      <br></br>
      <input type="submit" value="Save Meeting" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
