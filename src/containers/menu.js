import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/menu";

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: actions.GET_STUFF });
    }
  };
};

const Menu = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default Menu;
