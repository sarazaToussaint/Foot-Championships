const GET_LEAGUES = 'LEAGUES/redux/GET_LEAGUES';
const FILTER = 'LEAGUES/redux/FILTER';

const leagues = [];

export const fetchLeagues = () => async (dispatch) => {
  await fetch('https://api-football-standings.azharimm.site/leagues')
    .then((res) => res.json())
    .then((result) => {
      dispatch({ type: GET_LEAGUES, payload: result.data });
    }).catch((err) => err);
};

export const leaguesFilter = (search) => ({ type: FILTER, payload: search });

const leaguesReducer = (state = leagues, action) => {
  switch (action.type) {
    case FILTER: {
      return state.filter((league) => {
        const name = league.name.toLowerCase();
        return name.includes(action.payload.toLowerCase());
      });
    }
    case GET_LEAGUES:
      return action.payload.map((league) => ({
        id: league.id,
        name: league.name,
        logo: league.logos.light,
      }));
    default:
      return state;
  }
};

export default leaguesReducer;
