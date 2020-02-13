import { connect } from 'react-redux';
import CreateDog from './create_dog';
import { createDog } from '../../actions/dog_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createDog: (dog) => dispatch(createDog(dog))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDog);