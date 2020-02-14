import { connect } from 'react-redux';
import DogForm from './dog_form';
import { createDog } from '../../actions/dog_actions';
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
    fluff_by_vol: 0,
    int_cute_unit: 0,
    pet_shop_id: 0,
    author_id: state.session.id
  }
});
 
const mapDispatchToProps = dispatch => ({
  action: (formData) => dispatch(createDog(formData)),
  fetchPetShops: () => dispatch(fetchPetShops())
});

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);