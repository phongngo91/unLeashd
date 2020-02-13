import React from "react";

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
      dogsEl = this.props.authored_dogs.map((dog, idx) => {
        return (
          <div key={idx} className="user-dogs-card">
            <img src={dog.image_url} alt="dog-pic" className="user-dogs-icon" />
            <div className="dog-card-desc">
              <div>{dog.breed_name}</div>
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
              <div className="petshop-name">{pet_shop_name}</div>
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
