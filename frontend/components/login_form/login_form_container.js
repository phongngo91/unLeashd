import SessionForm from './session_form';
import { connect } from 'react-redux';
import {login } from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors,
        formType: 'login'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);