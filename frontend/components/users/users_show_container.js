import { connect } from 'react-redux';
import UsersShow from '../users/users_show';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedInUser: state.entities.users[state.session.id],
    currentUser: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);