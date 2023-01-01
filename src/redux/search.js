import { createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'showresult',
  initialState: { result: [], loading: false, error: null, search: '' },
  reducers:{
    searchRequest(state, action) { state.result = []; state.loading = true; state.error = null; state.search = action.payload},
    searchResult(state, action) {
      const res = action.payload;
      state.result = res;
      state.loading = false;
      state.error = null;
      state.search = ''
    },
    searchError(state, action) {
      const err = action.payload;
      state.result = [];
      state.error = err;
      state.loading = false;
      state.search = ''
    },
    changeField(state, action) {
      const chosen = action.payload;
      state.result = [];
      state.error = null;
      state.loading = false;
      state.search = chosen;
    }
  }
});

export const { searchRequest, searchResult, searchError, changeField } = searchSlice.actions;
export default searchSlice.reducer;
