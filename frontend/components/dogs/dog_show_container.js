import { connect } from "react-redux";
import DogShow from "./dog_show";
import { fetchDog } from "../../actions/dog_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    dog: state.entities.dogs[ownProps.match.params.dogId],
    loggedInUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDog: dogId => dispatch(fetchDog(dogId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DogShow);
