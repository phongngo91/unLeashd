import { connect } from 'react-redux';
import CreateDog from './create_dog';
import { createDog } from '../../actions/dog_actions';
import { fetchPetShops } from '../../actions/pet_shops_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  petShops: Object.values(state.entities.pet_shops)
});
 
const mapDispatchToProps = dispatch => ({
  createDog: (formData) => dispatch(createDog(formData)),
  fetchPetShops: () => dispatch(fetchPetShops())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDog);