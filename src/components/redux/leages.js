import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const getLeagues = createAsyncThunk('leagues/getLeagues', async () => {
  const response = await fetch('https://api-football-standings.azharimm.site/leagues');
  const data = await response.json();
  const leagues = data.data.map((league, i) => ({
    id: league.id,
    name: league.name,
    logo: league.logos.light,
    index: i,
  }));
  return leagues;
});
// export const getLeagues = () => {
//   axios.get('https://api-football-standings.azharimm.site/leagues')
//     .then((res) => {
//       console.log(res.data);
//     }).catch((err) => {
//       console.log(err);
//     });
// };

const options = {
  name: 'leagues',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getLeagues.fulfilled]: (state, action) => action.payload,
  },
};

const leaguesSlice = createSlice(options);

export default leaguesSlice.reducer;
