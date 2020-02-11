import React from "react";
import PetShopItem from './pet_shops_index_item';

class PetShopsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPetShops();
  }

  render() {
    const petShopEls = this.props.petShops.map((petShop, idx) => {
      return (<PetShopItem key={idx} petShop={petShop}/>)
    });

    return <div className="pet-shop-container" >{petShopEls}</div>;
  }
}

export default PetShopsIndex;
