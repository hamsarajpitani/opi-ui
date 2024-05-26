import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchIpoList } from './api';

const initialState = {
    Ipos: [],
    loading: true,
    error: null,
    selectedIpo: null,
};

export const fetchIpos = createAsyncThunk(
    'IpoList/fetchIpoList',
    async (arg, { rejectWithValue }) => {
        try {
            const data = await fetchIpoList()
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchSingleIpo = createAsyncThunk(
    'IpoList/fetchSingleIpo',
    async (slug, { rejectWithValue, dispatch, getState }) => {
        try {
            const { Ipos } = getState().ipoState;
            if (Ipos.length) {
                return Ipos.find(item => item.slug === slug);
            }
            await dispatch(fetchIpos());
            const { Ipos: updatedIpos } = getState().ipoState;
            const IPODetail = updatedIpos.find(item => item.slug === slug);
            return IPODetail
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const IpoListSlice = createSlice({
    name: 'IpoList',
    initialState,
    reducers: {
        clearSelectedIpo(state) {
            state.selectedIpo = null;
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
                state.Ipos = action.payload;
            })
            .addCase(fetchIpos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'An error occurred fetching Ipos';
            })
            .addCase(fetchSingleIpo.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSingleIpo.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedIpo = action.payload;
            })
            .addCase(fetchSingleIpo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'An error occurred fetching Ipos';

            });
    },
});

export const { clearSelectedIpo } = IpoListSlice.actions;
export default IpoListSlice.reducer;
