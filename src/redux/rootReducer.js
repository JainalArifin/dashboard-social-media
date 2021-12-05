import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { post } from "./post/reducer";
import { posts } from "./posts/reducer";
import { sideDrawerData } from "./sideDrawer/reducer";
import { snackbar } from "./snackbar/reducer";

const rootReducer = (history) =>
  combineReducers({
    routing: connectRouter(history),
    post,
    posts,
    sideDrawerData,
    snackbar,
  });

export default rootReducer;
