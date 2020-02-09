import LoginForm from './login_form';
import { connect } from 'react-redux';
import {login } from '../../actions/session_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors,
        formType: 'Sign In'
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);