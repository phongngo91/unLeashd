import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors,
        formType: 'Create Account'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(signup({user: user}))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);