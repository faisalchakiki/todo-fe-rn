import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postApiData, fetchApiTodos, deleteApiData, fetchDetailTodos, patchApiData } from '../../app/api'

// Define the async thunk to fetch data from the API
export const fetchListTodo = createAsyncThunk('api/fetchListTodo', async () => {
  return fetchApiTodos();
});

export const fetchDetail = createAsyncThunk('api/fetchDetailTodos', async (data) => {
  return fetchDetailTodos(data);
});

export const postData = createAsyncThunk('api/postData', async (data) => {
  return postApiData(data);
});

export const editData = createAsyncThunk('api/editData', async ({ id, payload }) => {
  return patchApiData(id, payload);
});

export const deleteData = createAsyncThunk('api/deleteData', async (id) => {
  return deleteApiData(id);
});

// Create the slice
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    detail: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchListTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchListTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(postData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postData.fulfilled, (state) => {
        state.isLoading = false;
        // Perform any necessary actions after successful post
      })
      .addCase(postData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteData.fulfilled, (state) => {
        state.isLoading = false;
        // Perform any necessary actions after successful post
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
      })
      .addCase(fetchDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editData.fulfilled, (state) => {
        state.isLoading = false;
        // Perform any necessary actions after successful post
      })
      .addCase(editData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export default apiSlice.reducer;
