import React from "react";
import { Link } from "react-router-dom";
import CheckinItemCard from "../checkin/checkin_item_card";

class DogShow extends React.Component {
  constructor(props) {
    super(props);

    this.openCheckinModal = this.openCheckinModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchDog(this.props.match.params.dogId);
  }

  openCheckinModal() {
    if (this.props.loggedInUser === undefined) {
      this.props.receiveErrors(["you must log in to continue."]);
      this.props.history.push("/login");
    } else {
      this.props.openCheckinModal();
    }
  }

  render() {
    let editBtn = null;
    if (this.props.loggedInUser && this.props.dog) {
      if (this.props.loggedInUser.id === this.props.dog.author_id) {
        editBtn = <Link to={`/dogs/${this.props.dog.id}/edit`}>Edit Dog</Link>;
      }
    }

    if (this.props.dog) {
      let dogCheckins = null;
      
      const { checkins, loggedInUser} = this.props;
      if (checkins.length > 0) {
        dogCheckins = this.props.checkins.reverse().map((checkin, idx) => (
          <CheckinItemCard
            checkin={checkin}
            key={idx}
            currentUser={loggedInUser}
          />
        ));
      }

      const {
        breed_name,
        image_url,
        description,
        author_id,
        pet_shop_id,
        fluff_by_vol,
        int_cute_unit,
        checkins_count,
        average_checkin_rating
      } = this.props.dog;
      const dog_author = this.props.users[author_id];
      const dog_pet_shop = this.props.pet_shops[pet_shop_id];

      if (dog_author === undefined || dog_pet_shop === undefined) {
        return null;
      }

      return (
        <div className="petshop-content">
          <div className="petshop-show-container">
            <div className="petshop-show-top">
              <div>
                <img
                  className="petshop-logo"
                  src={image_url}
                  alt="dog's image"
                />
                <div>{editBtn}</div>
              </div>
              <div className="petshop-show-description">
                <div className="dog-links">
                  <div className="dog-assotiations">
                    <div className="petshop-name truncate">{breed_name}</div>
                    <Link to={`/petshops/${dog_pet_shop.id}`}>
                      <span className="move-right">
                        {dog_pet_shop.pet_shop_name}
                      </span>
                    </Link>
                    <br />
                    <Link to={`/users/${dog_author.id}`}>
                      <span className="move-right">
                        {dog_author.first_name} {dog_author.last_name}
                      </span>
                    </Link>
                  </div>
                  <div
                    onClick={this.openCheckinModal}
                    className="checkin-button"
                    style={{
                      backgroundImage: `url(${window.checkmark})`
                    }}
                  ></div>
                </div>
                <div className="petshop-loc">{description}</div>
              </div>
            </div>
            <div className="petshop-stats-container">
              <div className="stat-item">{fluff_by_vol}% FBV</div>
              <div className="stat-item">{int_cute_unit} ICU</div>
              <div className="stat-item">
                {Math.floor(average_checkin_rating * 100) / 100} Paws
              </div>
              <div className="stat-item cancel-border">
                {checkins_count} Ratings
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
      return null;
    }
  }
}

export default DogShow;
