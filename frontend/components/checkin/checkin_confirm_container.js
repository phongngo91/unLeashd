import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import CheckinConfirm from "./checkin_confirm";

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect( null , mapDispatchToProps)(CheckinConfirm);