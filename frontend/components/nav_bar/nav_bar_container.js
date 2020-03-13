import { connect } from 'react-redux';
import NavBar from '../nav_bar/nav_bar';
import { logout } from '../../actions/session_actions';
import { searchUsers } from '../../actions/users_actions';

const mapStateToProps = state => ({
    loggedInUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    searchUsers: (name) => dispatch(searchUsers(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);