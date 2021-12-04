import { ROUTES } from "~/configs";
import { AssignmentInd } from "@mui/icons-material";

export function headerData() {
  return [
    {
      title: "User",
      url: ROUTES.USERS(),
      icon: AssignmentInd,
      // subMenu: null,
      // disabled: false,
    },
    // {
    //   title: "Squad",
    //   url: ROUTES.SQUAD(initialSquad),
    //   subMenu: null,
    //   disabled: !initialSquad,
    //   accessLevel: defaultAccessLevel,
    // },
  ];
}
