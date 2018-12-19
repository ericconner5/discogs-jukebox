import constants from './../constants';
const { c } = constants;

const { initialState } = constants;

export default youTubeSearchReducer (state = {initialState}, action) => {
  let newState;
  let newYouTubeSearch;
  const { newYouTubeSearch } = action;

  switch (action.type) {
    case c.YOUTUBE_SEARCH:

      // newstate info from searchDiscogsReducer stuff like here refactor plz for me now

      return action.youTubeSearch;
    default:
      return state;
  }
};
