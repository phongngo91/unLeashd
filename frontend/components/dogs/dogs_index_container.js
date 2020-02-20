import { connect } from "react-redux";
import DogsIndex from "./dogs_index";
import { fetchDogs, clearDogs, clearDogErrors } from "../../actions/dog_actions";

const mapStateToProps = state => {
  return { 
    dogs: Object.values(state.entities.dogs),
    errors: state.errors.dog
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDogs: (page) => dispatch(fetchDogs(page)),
  clearDogs: () => dispatch(clearDogs()),
  clearDogErrors: () => dispatch(clearDogErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(DogsIndex);
