import { connect } from 'react-redux';
import Home from './home';
import { fetchCheckins, deleteCheckin, clearCheckins } from '../../actions/checkin_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    checkins: state.entities.checkins,
    errors: state.errors.checkin
});

const mapDispatchToProps = dispatch => ({
    fetchCheckins: (page) => dispatch(fetchCheckins(page)),
    deleteCheckin: (checkinId) => dispatch(deleteCheckin(checkinId)),
    clearCheckins: () => dispatch(clearCheckins())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
