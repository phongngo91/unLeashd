import { connect } from "react-redux";
import PetShopShow from "./pet_shop_show";
import { fetchPetShop } from "../../actions/pet_shops_actions";

const mapStateToProps = (state, ownProps) => {
  return { 
    petShop: state.entities.pet_shops[ownProps.match.params.petShopId],
    // reverse to show the most recent dogs first
    authored_dogs: Object.values(state.entities.dogs)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPetShop: petShopId => dispatch(fetchPetShop(petShopId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetShopShow);
