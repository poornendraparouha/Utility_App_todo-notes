import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotesAsync = createAsyncThunk("note/getAll", async () => {
	const response = await axios.get("http://localhost:5000/api/notes");
	return response.data;
});

export const addNoteAsync = createAsyncThunk("note/add", async (text) => {
	const response = await fetch("http://localhost:5000/api/notes", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ text }),
	});
	return response.json();
});

export const deleteNoteAsync = createAsyncThunk("note/delete", async (id) => {
	await axios.delete(`${"http://localhost:5000/api/notes"}/${id}`);
	return id;
});

// creating reducer using redux toolkit
const noteSlice = createSlice({
	name: "note",
	initialState: { notes: [] },

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNotesAsync.fulfilled, (state, action) => {
			state.notes = action.payload;
		});
		builder.addCase(addNoteAsync.fulfilled, (state, action) => {
			state.notes.push(action.payload);
		});
		builder.addCase(deleteNoteAsync.fulfilled, (state, action) => {
			state.notes = state.notes.filter((n) => n.id !== action.payload);
		});
	},
});
// exporting reducer
export const noteReducer = noteSlice.reducer;
export const noteSelector = (state) => state.noteReducer.notes;
