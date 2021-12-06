import PostsTableContainer from "./PostsTableContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "~/redux/post/action";
import * as sideDrawerActions from "~/redux/sideDrawer/action";
import * as snackbarActions from "~/redux/snackbar/action";

const mapStateToProps = (state) => {
  return {
    sideDrawerData: state.sideDrawerData,
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    sideDrawerActions: bindActionCreators(sideDrawerActions, dispatch),
    snackbarActions: bindActionCreators(snackbarActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsTableContainer);
