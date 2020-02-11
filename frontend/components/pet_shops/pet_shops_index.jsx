import React from "react";

class PetShopsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.petShops;
  }

  componentDidMount() {
    this.props.fetchPetShops();
  }

  render() {
    const petShopEls = this.props.petShops.map((petShop, idx) => {
      return (
        <div className="pet-shop-logo">
          <img src={petShop.image_url} alt="pet-shop" />
        </div>
      );
    });

    return <div>{petShopEls}</div>;
  }
}

export default PetShopsIndex;
