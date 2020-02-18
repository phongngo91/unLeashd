import React from "react";
import DogsIndexItem from "./dogs_index_item";

class DogsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1
    };

    this.getDogs = this.getDogs.bind(this);
  }

  getDogs() {
    this.props.fetchDogs(this.state.page);
    this.setState = { page: (this.state.page += 1) };
  }

  componentDidMount() {
    this.getDogs();
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
          <div className="moreDog dog-container">
            <button 
              onClick={this.getDogs}
              className="moreDogBtn remove-blue">See More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DogsIndex;
