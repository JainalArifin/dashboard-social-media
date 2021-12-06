import { ROUTES } from "~/configs";
import { AssignmentInd, Article, AddPhotoAlternate } from "@mui/icons-material";

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
];

export default menuData;
