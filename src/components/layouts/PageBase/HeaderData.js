import { ROUTES } from "~/configs";
import { AssignmentInd } from "@mui/icons-material";

export function headerData() {
  return [
    {
      title: "User",
      url: ROUTES.USERS(),
      icon: AssignmentInd,
    },
    {
      title: "Posts",
      url: ROUTES.POSTS(),
      icon: AssignmentInd,
    },
  ];
}
