import React from "react";

class DogsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDogs();
  }

  render() {
    debugger
    const dogsEl = this.props.dogs.map((dog, idx) => {
      return (
        <>
          <img className="dog-avatar" src={dog.image_url} alt="dog-pic" />
          <div>{dog.breed_name}</div>
          <div>{dog.description}</div>
        </>
      );
    });
    return <div>{dogsEl}</div>;
  }
}

export default DogsIndex;
