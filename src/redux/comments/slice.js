import { createSlice } from '@reduxjs/toolkit';
import { addComment, getComments } from './operations';

const initialState = {
  comments: [],

  isRefreshing: false,
  error: false,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload.message || false;
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getComments.pending, handlePending)
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload;

        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getComments.rejected, handleRejected)

      .addCase(addComment.pending, handlePending)
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = [...state.comments, action.payload];
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(addComment.rejected, handleRejected);

    //   .addCase(getGoodById.pending, handlePending)
    //   .addCase(getGoodById.fulfilled, (state, action) => {
    //     state.goods = state.goods.filter(
    //       good => good._id === action.payload.id
    //     );
    //     state.isRefreshing = false;
    //     state.error = false;
    //   })
    //   .addCase(getGoodById.rejected, handleRejected)
    //   .addCase(editGood.pending, handlePending)
    //   .addCase(editGood.fulfilled, (state, action) => {
    //     const index = state.goods.findIndex(
    //       good => good._id === action.payload._id
    //     );
    //     state.goods.splice(index, 1, action.payload);
    //     state.isRefreshing = false;
    //     state.error = false;
    //   })
    //   .addCase(editGood.rejected, handleRejected)
    //   .addCase(deleteGood.pending, handlePending)
    //   .addCase(deleteGood.fulfilled, (state, action) => {
    //     state.goods = state.goods.filter(good => good._id !== action.payload);
    //     state.isRefreshing = false;
    //     state.error = false;
    //   })
    //   .addCase(deleteGood.rejected, handleRejected);
  },
});

export const commentsReducer = commentsSlice.reducer;
