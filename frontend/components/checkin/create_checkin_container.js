import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import CreateCheckinForm from "./create_checkin";
import {
  createCheckin,
  clearCheckinErrors
} from "../../actions/checkin_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.checkin,
    currentUser: state.entities.users[state.session.id],
    dog: Object.values(state.entities.dogs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createCheckin: formData => dispatch(createCheckin(formData)),
    clearCheckinErrors: () => dispatch(clearCheckinErrors()),
    openConfirmCheckinModal: () => dispatch(openModal('checkinConfirm'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCheckinForm);
