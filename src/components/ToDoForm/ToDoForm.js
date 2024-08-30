import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch } from "react-redux";
// import { AddTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducers";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // onCreateTodo(todoText);
    // dispatch(AddTodo(todoText));
    dispatch(actions.add(todoText));
    setTodoText("");
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
