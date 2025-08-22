
import { todoReducer } from "./reducers/todoReducers";
import {noteReducer} from "./reducers/noteReducers"
import { configureStore  } from "@reduxjs/toolkit";
import { notificationReducer } from "./reducers/notificationReducers";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

export const store = configureStore({
    reducer: {
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(), loggerMiddleware]
})