// export { default } from "./Posts";
import Albums from "./Albums";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "~/redux/post/action";
import * as sideDrawerActions from "~/redux/sideDrawer/action";

const mapStateToProps = (state) => {
  return {
    sideDrawerData: state.sideDrawerData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
    sideDrawerActions: bindActionCreators(sideDrawerActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
