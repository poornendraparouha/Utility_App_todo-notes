import "./ToDoForm.css";
import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addTodoAsync } from "../../redux/reducers/todoReducers";
import { notificatioSelector, resetNotification } from "../../redux/reducers/notificationReducers";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificatioSelector)

  if(message){
    setTimeout(()=>{
      dispatch(resetNotification())
    }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    dispatch(addTodoAsync(todoText));
  };

  return (
    <div className="container">
      {message && <div class="alert alert-success" role="alert">
        {message}
        </div> }
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <div className="center-btn"><button className="btn btn-success " type="submit">Create Todo</button></div>
    </form>
    </div>
  );
}

export default ToDoForm;