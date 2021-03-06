// export { default } from "./Posts";
import Comments from "./Comments";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "~/redux/comment/action";
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
