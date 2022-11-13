import { connect } from "react-redux";
import MapPage from "./MapPage";
import { addNewPoint, removePoint } from "../Store/map-reducer";
import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    mapPage: state.mapPage,
    isAuth: state.loginPage.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, { addNewPoint, removePoint }),
  withAuthRedirectComponent
)(MapPage);
