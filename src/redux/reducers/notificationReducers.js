import { createSlice } from "@reduxjs/toolkit";
import { addNoteAsync } from "./noteReducers";
import { addTodoAsync } from "./todoReducers";

const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		message: "",
	},
	reducers: {
		reset: (state) => {
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addTodoAsync.fulfilled, (state) => {
			state.message = "New Todo Created!!";
		});
		builder.addCase(addNoteAsync.fulfilled, (state) => {
			state.message = "New Note Created!!";
		});
	},
});

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificatioSelector = (state) => state.notificationReducer.message;
