// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	todos: [],
};

export const getInitialStateAsync = createAsyncThunk("todo/getInitialState", async () => {
	const res = await axios.get("http://localhost:5000/api/todos");
	return res.data;
});

export const addTodoAsync = createAsyncThunk("todo/addTodo", async (text) => {
	const res = await axios.post("http://localhost:5000/api/todos", {
		text,
		completed: false,
	});
	return res.data;
});

export const deleteTodoAsync = createAsyncThunk("todo/deleteTodo", async (id) => {
	await axios.delete(`${"http://localhost:5000/api/todos"}/${id}`);
	return id;
});

// creating reducer using redux toolkit
const todoSlice = createSlice({
	name: "todos",
	initialState: initialState,
	reducers: {
		add: (state, action) => {
			state.todos.push({ text: action.payload, completed: false });
		},
		// This is toggle action
		toggle: (state, action) => {
			state.todos.map((todo, i) => {
				if (i === action.payload) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getInitialStateAsync.fulfilled, (state, action) => {
			state.todos = action.payload;
		});
		builder
			.addCase(addTodoAsync.fulfilled, (state, action) => {
				state.todos.push(action.payload);
			})
			.addCase(deleteTodoAsync.fulfilled, (state, action) => {
				state.todos = state.todos.filter((t) => t.id !== action.payload);
			});
	},
});
// exporting reducer
export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;
