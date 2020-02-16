import { connect } from "react-redux";
import DogShow from "./dog_show";
import { fetchDog } from "../../actions/dog_actions";
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    dog: state.entities.dogs[ownProps.match.params.dogId],
    loggedInUser: state.entities.users[state.session.id],
    pet_shops: state.entities.pet_shops,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDog: dogId => dispatch(fetchDog(dogId)),
  openCheckinModal: () => dispatch(openModal('checkin'))
});

export default connect(mapStateToProps, mapDispatchToProps)(DogShow);
