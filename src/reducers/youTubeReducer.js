import c from './../constants';



export default (state = {}, action) => {
  let newState;
  // let newYouTubeSearch;
  // const { youTubeSearch } = action;

  switch (action.type) {
    case c.YOUTUBE_SEARCH:
      // newState = Object.assign({}, state, {
      //   isFetching: false,
      //   newYouTubeSearch: action.newYouTubeSearch});


      // accessing this elsewhere will be state.newYouTubeSearch
      return action.youTubeSearch;
    default:
      return state;
  }
};
