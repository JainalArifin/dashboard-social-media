import { ROUTES } from "~/configs";
import {
  AssignmentInd,
  Article,
  AddPhotoAlternate,
  AddAPhoto,
} from "@mui/icons-material";

const menuData = [
  {
    title: "Users",
    url: ROUTES.USERS(),
    icon: AssignmentInd,
  },
  {
    title: "Posts",
    url: ROUTES.POSTS(),
    icon: Article,
  },
  {
    title: "Albums",
    url: ROUTES.ALBUMS(),
    icon: AddPhotoAlternate,
  },
  {
    title: "Photos",
    url: ROUTES.PHOTOS(),
    icon: AddAPhoto,
  },
];

export default menuData;
