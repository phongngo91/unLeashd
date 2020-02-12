import React from "react";
import { Link } from "react-router-dom";

const PetShopItem = ({ petShop }) => {
  return (
    <div key={petShop.id} className="pet-shop-item">
      <Link to={`/petshops/${petShop.id}`}>
        <img className="pet-shop-logo" src={petShop.image_url} alt="pet-shop" />
      </Link>
      <div className="pet-shop-description">
        <div className="pet-shop-link">
          <Link to={`/petshops/${petShop.id}`}>{petShop.pet_shop_name}</Link>
        </div>
        <div>
          {petShop.city}, {petShop.state}
        </div>
      </div>
    </div>
  );
};

export default PetShopItem;
