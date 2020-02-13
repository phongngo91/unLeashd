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
    const dogsEl = this.props.dogs.map((dog, idx) => {
      return (
        <li key={idx}>
          <DogsIndexItem dog={dog} />
        </li>
      );
    });
    return (
      <div>
        <div className="dog-index-one">
          <div className="dog-list list-title">All Dogs</div>
          {dogsEl}
        </div>
      </div>
    );
  }
}

export default DogsIndex;
