import { ACTIONS } from "~/constants";

export function comment(state = {}, action) {
  switch (action.type) {
    case ACTIONS.GET_COMMENT_DETAIL:
      return action.comment;
    default:
      return state;
  }
}
