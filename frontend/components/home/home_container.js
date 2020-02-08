import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

export default connect(mapStateToProps)(Home);
