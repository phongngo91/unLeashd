import { connect } from "react-redux";
import PetShopShowDogs from "./pet_shop_show_dogs";
import { fetchPetShop } from "../../actions/pet_shops_actions";

const mapStateToProps = (state, ownProps) => {
  return { 
    petShop: state.entities.pet_shops[ownProps.match.params.petShopId],
    authored_dogs: Object.values(state.entities.dogs)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPetShop: petShopId => dispatch(fetchPetShop(petShopId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetShopShowDogs);