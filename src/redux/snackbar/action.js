import { ACTIONS } from "~/constants";

export function openSnackbar(data) {
  return {
    type: ACTIONS.OPEN_SNACKBAR,
    ...data,
  };
}
