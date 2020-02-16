import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateCheckinForm from './create_checkin';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCheckinForm);