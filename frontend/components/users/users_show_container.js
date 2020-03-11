import { connect } from 'react-redux';
import UsersShow from '../users/users_show';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/users_actions';
import { createFriendship, destroyFriendship } from "../../actions/friendship_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    showedUser: state.entities.users[ownProps.match.params.userId],
    errors: state.errors.checkin,
    checkins: state.entities.checkins
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createFriendship: (friendship) => dispatch(createFriendship(friendship)),
    // destroyFriendship: (friendship) => dispatch(destroyFriendship(friendship))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow);