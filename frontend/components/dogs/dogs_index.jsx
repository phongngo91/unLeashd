import React from "react";
import DogsIndexItem from "./dogs_index_item";

class DogsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      hideButton: ""
    };

    this.getDogs = this.getDogs.bind(this);
  }

  getDogs() {
    this.props.fetchDogs(this.state.page);
    this.setState = { page: (this.state.page += 1) };
  }

  componentDidMount() {
    this.props.clearDogs();
    this.getDogs();
  }

  render() {
    let moreButton = null;

    if (this.props.errors.includes("No More Dogs")) {
      moreButton = (<div className="center-me">
        <span>No More Dogs</span>
        </div>)
    } else {
      moreButton = (
        <div className="moreDog dog-container">
        <button
          onClick={this.getDogs}
          className={`moreDogBtn remove-blue ${this.state.hideButton}`}
        >
          See More
        </button>
      </div>
      );
    }

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
          {moreButton}
        </div>
      </div>
    );
  }
}

export default DogsIndex;
