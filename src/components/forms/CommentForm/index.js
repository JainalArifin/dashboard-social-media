// export { default } from "./PostForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sideDrawerActions from "~/redux/sideDrawer/action";
import * as snackbarActions from "~/redux/snackbar/action";
import CommentFormContainer from "./CommentFormContainer";

const mapStatetoProps = (state) => {
  return {
    comment: state.comment,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    sideDrawerActions: bindActionCreators(sideDrawerActions, dispatch),
    snackbarActions: bindActionCreators(snackbarActions, dispatch),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(CommentFormContainer);
