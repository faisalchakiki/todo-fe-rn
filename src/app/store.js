import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../features/modal/modalSlice'
import todoReducer from '../features/todos/todoSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    todos: todoReducer,
  },
})