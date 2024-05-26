import { configureStore } from '@reduxjs/toolkit';
import ipoSlice from 'features/IPO/ipoSlice';

const store = configureStore({
    reducer: {
        ipoState: ipoSlice
    },
});

export default store;