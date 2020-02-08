import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
    loggedInUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps)(Home);
