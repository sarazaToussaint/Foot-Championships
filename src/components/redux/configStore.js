import { configureStore } from '@reduxjs/toolkit';
import leaguesSlice from './leages';

const store = configureStore({
  reducer: {
    leagues: leaguesSlice,
  },
});

export default store;
