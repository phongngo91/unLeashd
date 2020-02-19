import { connect } from 'react-redux';
import ThePark from './the_park';
import { fetchCheckins, deleteCheckin } from '../../actions/checkin_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    checkins: Object.values(state.entities.checkins),
    errors: state.errors.checkin
});

const mapDispatchToProps = dispatch => ({
    fetchCheckins: (page) => dispatch(fetchCheckins(page)),
    deleteCheckin: (checkinId) => dispatch(deleteCheckin(checkinId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThePark);
