import { connect } from 'react-redux';
import NavBar from '../nav_bar/nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
    loggedInUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);