import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as snackbarActions from "~/redux/snackbar/action";
import App from "./App";

const mapStateToProps = (state) => {
  return {
    snackbar: state.snackbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    snackbarActions: bindActionCreators(snackbarActions, dispatch),
  };
};

const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppWithRedux;
