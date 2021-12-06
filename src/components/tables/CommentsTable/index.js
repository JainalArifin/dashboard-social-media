import CommentsTableContainer from "./CommentsTableContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "~/redux/comment/action";
import * as sideDrawerActions from "~/redux/sideDrawer/action";
import * as snackbarActions from "~/redux/snackbar/action";

const mapStateToProps = (state) => {
  return {
    sideDrawerData: state.sideDrawerData,
    comment: state.comment,
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
)(CommentsTableContainer);
