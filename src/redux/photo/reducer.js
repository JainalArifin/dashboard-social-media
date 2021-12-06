import { ACTIONS } from "~/constants";

export function photo(state = {}, action) {
  switch (action.type) {
    case ACTIONS.GET_PHOTO_DETAIL:
      return action.photo;
    default:
      return state;
  }
}
