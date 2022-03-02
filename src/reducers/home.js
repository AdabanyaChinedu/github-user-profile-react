import {
  SEARCH_USER,
  ASYNC_START,
  SET_PAGE
} from '../constants/actionTypes';

const defaultState = { userCount: 0 };

export default (state = defaultState, action) => {
  switch (action.type) {

    case SEARCH_USER:
      if (action.payload) {
        return {
          ...state,
          pager: action.pager,
          users: action.payload.items,
          userCount: action.payload.total_count,
          currentPage: 0,
          inputData: action.inputData,
          inProgress: false
        };
      }
      return state;

    case ASYNC_START:
      console.log("--------Reducer--------")
      console.log(action)
      if (action.subtype === SEARCH_USER) {
        return { ...state, inProgress: true };
      }
      if (action.subtype === SET_PAGE) {
        return state;
      }
      break;

    case SET_PAGE:
      return {
        ...state,
        users: action.payload.items,
        userCount: action.payload.total_count,
        currentPage: action.page,
        inputData: action.inputData,
        inProgress: false
      };
    default:
      return state;
  }
};
