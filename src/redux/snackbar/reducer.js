import { Map } from "immutable";
import { ACTIONS } from "~/constants";

const initData = Map({
  isOpen: false,
  variant: "",
  message: "",
});

export function snackbar(state = initData, action) {
  switch (action.type) {
    case ACTIONS.OPEN_SNACKBAR:
      return Map({
        isOpen: true,
        ...action,
      });
    default:
      return state;
  }
}
