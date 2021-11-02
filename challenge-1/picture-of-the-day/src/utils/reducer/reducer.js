import { actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setApiParams:
      return { ...state, apiParams: action.payload };
    case actions.setError:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
