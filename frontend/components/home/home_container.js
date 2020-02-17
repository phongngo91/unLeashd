import { connect } from 'react-redux';
import Home from './home';
import { fetchCheckins } from '../../actions/checkin_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    checkins: Object.values(state.entities.checkins)
});

const mapDispatchToProps = dispatch => ({
    fetchCheckins: () => dispatch(fetchCheckins())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
