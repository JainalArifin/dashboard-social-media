// export { default } from "./PostForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sideDrawerActions from "~/redux/sideDrawer/action";
import * as snackbarActions from "~/redux/snackbar/action";
import PostFormContainer from "./PostFormContainer";

const mapStatetoProps = (state) => {
  return {
    post: state.post,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    sideDrawerActions: bindActionCreators(sideDrawerActions, dispatch),
    snackbarActions: bindActionCreators(snackbarActions, dispatch),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PostFormContainer);
