import { MdDelete } from "react-icons/md";

function Todoitem({todoName, todoDate, onDeleteClick}) {


  return (
    <div className="container">
      <div className="row mrow">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">       
          <button type="button" className="btn btn-danger bnt" onClick={() =>onDeleteClick(todoName)}>
          <MdDelete className="deleteIcon" />
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
