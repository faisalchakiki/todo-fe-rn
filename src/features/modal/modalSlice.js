import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  type: "add",
}

export const toggleModal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.isVisible = action.payload
    },
    addData: (state, action) => {
      state.data = action.payload
    },
    typeModal: (state, action) => {
      state.type = action.payload
    }
  },
})

export const { toggle, addData, typeModal } = toggleModal.actions

export default toggleModal.reducer