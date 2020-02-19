import { connect } from 'react-redux';
import ThePark from './the_park';
import { fetchCheckins } from '../../actions/checkin_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    checkins: Object.values(state.entities.checkins),
    errors: state.errors.checkin
});

const mapDispatchToProps = dispatch => ({
    fetchCheckins: (page) => dispatch(fetchCheckins(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThePark);
