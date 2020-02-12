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
    if (this.props.petShop) {
      const { pet_shop_name, image_url, city, state } = this.props.petShop;
      return (
        <div className="petshop-show-container">
          <div>
            <img className="petshop-logo" src={image_url} alt="petshop-logo" />
          </div>
          <div className="petshop-show-description">
            <div className="petshop-name" >{pet_shop_name}</div>
            <span className="petshop-loc">{city}, {state}</span>
          </div>
        </div>
      );
    } else {
      return <div>Page Not Found</div>;
    }
  }
}

export default PetShopShow;
