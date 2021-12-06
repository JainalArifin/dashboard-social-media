import { ACTIONS } from "~/constants";

export function getPhotoDetail(photo) {
  return {
    type: ACTIONS.GET_PHOTO_DETAIL,
    photo,
  };
}
