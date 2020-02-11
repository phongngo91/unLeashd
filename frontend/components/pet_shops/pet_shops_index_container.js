import { connect } from 'react-redux';
import PetShopsIndex from './pet_shops_index';
import { fetchPetShops } from '../../actions/pet_shops_actions';

const mapStateToProps = state => {
  return {
    petShops: Object.values(state.entities.pet_shops)
};
};

const mapDispatchToProps = dispatch => ({
    fetchPetShops: () => dispatch(fetchPetShops())
});

export default connect(mapStateToProps, mapDispatchToProps)(PetShopsIndex);