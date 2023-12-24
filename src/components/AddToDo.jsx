import { useState } from "react";
import styles from "./AddToDo.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonCliked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="containertext-center">
      <div className={`${styles.doInput} row mrow`}>
        <div className="col-5 my-3">
          <input
            type="text"
            className={`${styles.input}`}
            placeholder="Enter ToDo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-5 my-3">
          <input type="date" className={`${styles.input}`} value={dueDate} onChange={handleDateChange} />
        </div>
      </div>
      <div className={`${styles.doInput} row mrow`}>
        <div className="col">
          <button
            type="button"
            className="btn btn-success bnt"
            onClick={handleAddButtonCliked}
          >
            <IoIosAddCircleOutline className={styles.addIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
