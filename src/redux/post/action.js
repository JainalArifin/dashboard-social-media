import { ACTIONS } from "~/constants";

export function getPostDetail(post) {
  return {
    type: ACTIONS.GET_POST_DETAIL,
    post,
  };
}
