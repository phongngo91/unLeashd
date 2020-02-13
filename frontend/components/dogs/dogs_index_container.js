import { connect } from "react-redux";
import DogsIndex from "./dogs_index";
import { fetchDogs } from "../../actions/dog_actions";

const mapStateToProps = state => {
  return { dogs: Object.values(state.entities.dogs) };
};

const mapDispatchToProps = dispatch => ({
  fetchDogs: () => dispatch(fetchDogs())
});

export default connect(mapStateToProps, mapDispatchToProps)(DogsIndex);
