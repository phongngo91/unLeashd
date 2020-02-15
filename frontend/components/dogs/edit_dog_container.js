import { connect } from 'react-redux';
import EditDogForm from './edit_dog_form';
import { editDog, clearDogErrors, fetchDog } from '../../actions/dog_actions';
import { fetchPetShops } from '../../actions/pet_shops_actions';

const mapStateToProps = (state,ownProps) => ({
  formType: 'Save Edit',
  errors: state.errors.dog,
  currentUser: state.entities.users[state.session.id],
  petShops: Object.values(state.entities.pet_shops),
  dog: state.entities.dogs[ownProps.match.params.dogId]
});
 
const mapDispatchToProps = dispatch => ({
  action: (formData) => dispatch(editDog(formData)),
  fetchPetShops: () => dispatch(fetchPetShops()),
  fetchDog: (dogId) => dispatch(fetchDog(dogId)),
  clearDogErrors: () => dispatch(clearDogErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDogForm);