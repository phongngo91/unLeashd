import { connect } from 'react-redux';
import Banner from './banner';

const mapStateToProps = state => ({
    test: "test"
});

const mapDispatchToProps = dispatch => ({
    test: () => dispatch(console.log("Hello"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
