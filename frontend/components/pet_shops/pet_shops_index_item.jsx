import React from "react";
import { Link } from "react-router-dom";

const PetShopItem = ({ petShop }) => {
  return (
    <div key={petShop.id} className="pet-shop-item">
      {/* <Link to={`/pokemon/${props.pokemon.id}`}>
          <p className="poke-names">{props.pokemon.name}</p>
          <p><img src={props.pokemon.image_url} /></p>
        </Link> */}
      <img className="pet-shop-logo" src={petShop.image_url} alt="pet-shop" />
      <Link to={`/petshops/${petShop.id}`}>{petShop.pet_shop_name}</Link>
    </div>
  );
};

export default PetShopItem;
