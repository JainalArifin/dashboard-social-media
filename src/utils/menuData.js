import { ROUTES } from "~/configs";
import { AssignmentInd } from "@mui/icons-material";

const menuData = [
  {
    title: "Users",
    url: ROUTES.USERS(),
    icon: AssignmentInd,
  },
  {
    title: "Posts",
    url: ROUTES.POSTS(),
    icon: AssignmentInd,
  },
];

export default menuData;
