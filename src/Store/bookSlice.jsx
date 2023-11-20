import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch("http://localhost:3005/books");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (arg, thunkAPI) => {
    const { rejectWithValue , getState } = thunkAPI;
    try {
      arg.userName = getState().auth.name
      const response = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(arg),
        headers: {
          "Content-type": "application/json; charset= UTF-8 ",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/books/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isloading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    //-----------------getBook------------------------

    builder
      .addCase(getBooks.pending, (state, action) => {
        state.isloading = true;
        console.log(action);
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isloading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isloading = true;
        state.error = action.payload;
      });
    //---------------insertBook------------------------
    builder
      .addCase(insertBook.pending, (state, action) => {
        state.isloading = true;
        state.error = null;
        console.log(action);
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isloading = false;
        state.books.push(action.payload);
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.isloading = true;
        state.error = action.payload;
      });
    //---------------deleteBook------------------------
    builder
      .addCase(deleteBook.pending, (state, action) => {
        state.isloading = true;
        state.error = null;
        console.log(action);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isloading = false;
        state.books = state.books.filter((el) => el.id != action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isloading = true;
        state.error = action.payload;
      });

  },
});

export const { books, isloading, error } = bookSlice.actions;
export default bookSlice.reducer;
