import searchDiscogsReducer from './searchDiscogsReducer';
import youTubeSearchReducer from './youTubeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  searchDiscogs: searchDiscogsReducer,
  youTubeSearch: youTubeSearchReducer
});

export default rootReducer;
