import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup, receiveErrors, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors,
        formType: 'Create Account'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signup({user: user})),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);