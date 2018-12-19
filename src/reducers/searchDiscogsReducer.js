import c from './../constants';

export default (state = {}, action) => {
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
