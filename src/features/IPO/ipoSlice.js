import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchIpoList } from './api';

const initialState = {
    Ipos: [],
    loading: true,
    error: null,
    selectedIpoId: null,
};

export const fetchIpos = createAsyncThunk(
    'IpoList/fetchIpos',
    async (arg, { rejectWithValue }) => {
        try {
            const data = await fetchIpoList();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const IpoListSlice = createSlice({
    name: 'IpoList',
    initialState,
    reducers: {
        selectIpo(state, action) {
            state.selectedIpoId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIpos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchIpos.fulfilled, (state, action) => {
                state.loading = false;
                state.IpoList = action.payload;
            })
            .addCase(fetchIpos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'An error occurred fetching Ipos';
            });
    },
});

export const { selectIpo } = IpoListSlice.actions;
export default IpoListSlice.reducer;
