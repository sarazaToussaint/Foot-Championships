import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api-football-standings.azharimm.site/leagues/';

export const fetchDetails = createAsyncThunk('details/fetchDetails', async (id) => {
  const res = await fetch(`${url}${id}/standings?season=2021`);
  const dataSeason = await res.json();
  const data = dataSeason.data.standings;

  const details = data.map((club) => ({
    rank: club.stats[4].value,
    name: club.team.displayName,
    logo: club.team.logos[0].href,
  }));
  return details;
});

const options = {
  name: 'details',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchDetails.fulfilled]: (state, action) => action.payload,
  },
};

const detailsSlice = createSlice(options);

export default detailsSlice.reducer;
