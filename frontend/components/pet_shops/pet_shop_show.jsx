import React from "react";
import { Link } from "react-router-dom";
import CheckinItemCard from "../checkin/checkin_item_card";

class PetShopShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.petShop;
  }

  componentDidMount() {
    this.props.clearCheckins();
    this.props.fetchPetShop(this.props.match.params.petShopId);
  }

  render() {
    if (this.props.petShop && this.props.petShop.checkin_ids) {
      const {
        id,
        pet_shop_name,
        image_url,
        city,
        state,
        checkins_count,
        average_checkin_rating,
        dog_count
      } = this.props.petShop;

      let dogCheckins = null;
      let petShopCheckinsArr = [];
      this.props.petShop.checkin_ids.forEach(id => {
        if (this.props.checkins[id]) {
          petShopCheckinsArr.push(this.props.checkins[id]);
        }
      });

      if (petShopCheckinsArr.length > 0) {
        dogCheckins = petShopCheckinsArr.map((checkin, idx) => (
          <CheckinItemCard
            checkin={checkin}
            key={idx}
            currentUser={this.props.loggedInUser}
            // deleteCheckin={deleteCheckin}
          />
        ));
      }

      return (
        <div className="petshop-content">
          <div className="petshop-show-container">
            <div className="petshop-show-top">
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
            <div className="petshop-stats-container">
              <div className="stat-item">
                {Math.floor(average_checkin_rating * 100) / 100} Paws
              </div>
              <div className="stat-item">{checkins_count} Ratings</div>
              <div className="stat-item cancel-border">
                <Link to={`/petshops/${id}/dogs`} className="dog-name">
                  {dog_count} Dogs
                </Link>
              </div>
            </div>
          </div>
          <div className="petshop-checkins">
            <div className="petshop-checkin-list">Recent Activity</div>
            {dogCheckins}
          </div>
        </div>
      );
    } else {
      return <div>Page Not Found</div>;
    }
  }
}

export default PetShopShow;
