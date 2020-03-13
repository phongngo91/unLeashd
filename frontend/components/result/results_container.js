import { connect } from "react-redux";
import Result from "./results";

const mapStateToProps = state =>{
  return {
    users: state.entities.searchedUsers
  };
};


export default connect(mapStateToProps, null)(Result);