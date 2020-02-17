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
    let petShopCheckins = null;
    if (this.props.checkins.length > 0) {
      petShopCheckins = this.props.checkins.reverse().map((checkin, idx) => {
        let checkinImage = null;
        let checkinBody = null;
        if (checkin.image_url) {
          checkinImage = (
            <div className="checkin-img-container">
              <img
                className="checkin-img"
                src={checkin.image_url}
                alt="checkin-image"
              />
            </div>
          );
        }
        if (checkin.checkin_body.length > 0) {
          checkinBody = (
            <div className="checkin-body-container">
              <div className="checkin-body-text">{checkin.checkin_body}</div>
            </div>
          );
        }

        return (
          <div key={idx} className="checkin-card">
            <div className="checkin-user-info">
              <span>
                <span>
                  <a
                    href={`/#/users/${checkin.author_id}`}
                    className="dog-name"
                  >
                    {checkin.author.first_name} {checkin.author.last_name}
                  </a>
                </span>{" "}
                is petting a{" "}
                <a href={`/#/dogs/${checkin.dog_breed_id}`} className="dog-name">
                  {checkin.dog_breed.breed_name}
                </a>{" "}
                at{" "}
                <a
                  href={`/#/petshops/${checkin.pet_shop_id}`}
                  className="dog-name"
                >
                  {checkin.pet_shop}
                </a>
              </span>
            </div>
            {checkinBody}
            <div>{checkinImage}</div>
          </div>
        );
      });
    }

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
          <div className="petshop-checkins">
            <div className="petshop-checkin-list">
              {pet_shop_name}'s Checkins
            </div>
            {petShopCheckins}
          </div>
        </div>
      );
    } else {
      return <div>Page Not Found</div>;
    }
  }
}

export default PetShopShow;
