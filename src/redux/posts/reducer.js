import { ACTIONS } from "~/constants";

export function posts(state = [], action) {
  switch (action.type) {
    case ACTIONS.GET_POST_ALL:
      return action.posts;
    default:
      return state;
  }
}
