import { ACTIONS } from "~/constants";

export function getPostAll(posts) {
  return {
    type: ACTIONS.GET_POST_ALL,
    posts,
  };
}
