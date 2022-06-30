import { configureStore } from '@reduxjs/toolkit';
import leaguesSlice from './leages';
import detailsSlice from './details';

const store = configureStore({
  reducer: {
    leagues: leaguesSlice,
    details: detailsSlice,
  },
});

export default store;
