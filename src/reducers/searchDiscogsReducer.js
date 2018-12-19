import constants from './../constants';
const { c } = constants;

const { initialState, types } = constants;

// const searchDiscogsReducer = this was what I started with... doesn't seem right

export default (state = {initialState}, action) => {
  let newState;
  let newLabel;
  const { label } = action;

  switch (action.type) {
    case c.ADD_LABEL:
      newState = Object.assign({}, state, {
        isFetching: false,
        newLabel: action.newLabel});
      // accessing this elsewhere will be state.newLabel
      return newState;

    default:
      return state;
  }
};

// export default searchDiscogsReducer;
