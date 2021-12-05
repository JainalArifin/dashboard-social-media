import { ACTIONS } from "~/constants";

export function post(state = {}, action) {
  switch (action.type) {
    case ACTIONS.GET_POST_DEATIL:
      return action.post;
    default:
      return state;
  }
}
