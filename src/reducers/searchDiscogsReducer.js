import constants from './../constants';

const { initialState, types } = constants;

const searchDiscogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_LABEL:
      const newLabel = Object.assign({}, {
        [action.id]: {
          label: action.label
        }
      });
      return newLabel;

    default:
      return state;
  }
}

export default searchDiscogsReducer;
