import { connect } from "react-redux";
import PetShopShow from "./pet_shop_show";
import { fetchPetShop } from "../../actions/pet_shops_actions";
import { clearCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    petShop: state.entities.pet_shops[ownProps.match.params.petShopId],
    checkins: state.entities.checkins
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPetShop: petShopId => dispatch(fetchPetShop(petShopId)),
  clearCheckins: () => dispatch(clearCheckins())
});

export default connect(mapStateToProps, mapDispatchToProps)(PetShopShow);
