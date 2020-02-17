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

    if (this.props.petShop) {
      const { id, pet_shop_name, image_url, city, state } = this.props.petShop;
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
              <div className="move-right">
                <Link to={`/petshops/${id}/dogs`} className="dog-name">
                  {pet_shop_name}'s Dogs
                </Link>
              </div>
            </div>
          </div>
          <div className="petshop-dog-show">
            <div className="dog-list">Checkins</div>
            
          </div>
        </div>
      );
    } else {
      return <div>Page Not Found</div>;
    }
  }
}

export default PetShopShow;
