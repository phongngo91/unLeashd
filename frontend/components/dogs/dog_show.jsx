import React from "react";
import { Link } from "react-router-dom";

class DogShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDog(this.props.match.params.dogId);
  }

  render() {
    let editBtn = null;
    if (this.props.loggedInUser && this.props.dog) {
      if (this.props.loggedInUser.id === this.props.dog.author_id) {
        editBtn = <Link to={`/dogs/${this.props.dog.id}/edit`}>Edit Dog</Link>;
      }
    }

    if (this.props.dog) {
      const { id, breed_name, image_url, description } = this.props.dog;
      return (
        <div className="petshop-show-container">
          <div>
            <img className="petshop-logo" src={image_url} alt="dog's image" />
            <div>{editBtn}</div>
          </div>
          <div className="petshop-show-description">
            <div className="petshop-name">{breed_name}</div>
            <div className="petshop-loc">{description}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DogShow;
