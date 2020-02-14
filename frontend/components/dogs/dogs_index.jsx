import React from "react";
import DogsIndexItem from "./dogs_index_item";

class DogsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    const dogsEl = this.props.dogs.reverse().map((dog, idx) => {
      return (
        <li key={idx}>
          <DogsIndexItem dog={dog} />
        </li>
      );
    });
    return (
      <div className="dog-index-container">
        <div className="dog-index-one">
          <div className="dog-list list-title">All Dogs</div>
          {dogsEl}
        </div>
      </div>
    );
  }
}

export default DogsIndex;
