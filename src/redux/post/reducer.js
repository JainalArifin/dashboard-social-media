import { ACTIONS } from "~/constants";

export function post(state = {}, action) {
  switch (action.type) {
    case ACTIONS.GET_POST_DETAIL:
      return action.post;
    default:
      return state;
  }
}
