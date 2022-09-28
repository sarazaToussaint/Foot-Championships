import { configureStore } from '@reduxjs/toolkit';
import detailsSlice from './details';
import leaguesReducer from './league';

const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    details: detailsSlice,
  },
});

export default store;
