import { connect } from 'react-redux';
import CreateDogForm from './create_dog_form';
import { createDog, clearDogErrors } from '../../actions/dog_actions';
import { fetchPetShops } from '../../actions/pet_shops_actions';

const mapStateToProps = state => ({
  formType: 'Create Dog',
  errors: state.errors.dog,
  currentUser: state.entities.users[state.session.id],
  petShops: Object.values(state.entities.pet_shops),
  dog: {
    imageUrl: "",
    photoFile: null,
    breed_name: "",
    description: "",
    fluff_by_vol: null,
    int_cute_unit: null,
    pet_shop_id: 0,
    author_id: state.session.id
  }
});
 
const mapDispatchToProps = dispatch => ({
  action: (formData) => dispatch(createDog(formData)),
  fetchPetShops: () => dispatch(fetchPetShops()),
  clearDogErrors: () => dispatch(clearDogErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateDogForm);