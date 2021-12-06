import { ACTIONS } from "~/constants";

export function getCommentDetail(comment) {
  return {
    type: ACTIONS.GET_COMMENT_DETAIL,
    comment,
  };
}
