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
    return <div>{dogsEl}</div>;
  }
}

export default DogsIndex;
