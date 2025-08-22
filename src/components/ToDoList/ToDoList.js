import "./ToDoList.css";
import { useSelector, useDispatch } from "react-redux";
import { actions, getInitialStateAsync, deleteTodoAsync } from "../../redux/reducers/todoReducers.js";
import { todoSelector } from "../../redux/reducers/todoReducers";
import { useEffect } from "react";

function ToDoList() {
	const todos = useSelector(todoSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getInitialStateAsync());
	}, [dispatch]);

	return (
		<div className="container">
			<ul>
				{todos.map((todo, index) => (
					<li key={todo.id}>
						<span className="content">{todo.text}</span>
            <div className="status-actions">
						<span className={todo.completed ? "completed" : "pending"}>{todo.completed ? "Completed" : "Pending"}</span>
						<button
							className="btn btn-warning"
							onClick={() => {
								dispatch(actions.toggle(index));
							}}
						>
							{" "}
							Toggle{" "}
						</button>
						<button className="btn btn-danger" onClick={() => dispatch(deleteTodoAsync(todo.id))}>
							{" "}
							Delete{" "}
						</button>
            </div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
