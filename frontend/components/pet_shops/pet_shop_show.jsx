import React from "react";
import { Link } from "react-router-dom";

class PetShopShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.petShop;
  }

  componentDidMount() {
    this.props.fetchPetShop(this.props.match.params.petShopId);
  }

  render() {
    let dogsEl = null;
    if (this.props.authored_dogs) {
      // Reverse to show the most recent dogs first
      dogsEl = this.props.authored_dogs.reverse().map((dog, idx) => {
        return (
          <div key={idx} className="user-dogs-card">
            <Link to={`/dogs/${dog.id}`}>
              <img
                src={dog.image_url}
                alt="dog-pic"
                className="user-dogs-icon"
              />
            </Link>

            <div className="dog-card-desc">
              <Link to={`/dogs/${dog.id}`}>
                <div className="dog-name">{dog.breed_name}</div>
              </Link>
              <div>{dog.description}</div>
            </div>
          </div>
        );
      });
    }

    if (this.props.petShop) {
      const { pet_shop_name, image_url, city, state } = this.props.petShop;
      return (
        <div className="petshop-content">
          <div className="petshop-show-container">
            <div>
              <img
                className="petshop-logo"
                src={image_url}
                alt="petshop-logo"
              />
            </div>
            <div className="petshop-show-description">
              <div className="petshop-name truncate">{pet_shop_name}</div>
              <span className="petshop-loc">
                {city}, {state}
              </span>
            </div>
          </div>
          <div className="petshop-dog-show">
            <div className="dog-list">Dog List</div>
            {dogsEl}
          </div>
        </div>
      );
    } else {
      return <div>Page Not Found</div>;
    }
  }
}

export default PetShopShow;
