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
    let dogsEl = null;
    if (this.props.dogs && this.props.petShop) {

      const authoredDogArr = [];
      const authoredBreedId = this.props.petShop.dog_breed_ids;
      authoredBreedId.forEach(id => {
        if (this.props.dogs[id]){
          authoredDogArr.push(this.props.dogs[id]);
        }
      });

      dogsEl = authoredDogArr.map((dog, idx) => {
        return (
          <div key={idx} className="user-dogs-card">
            <Link to={`/dogs/${dog.id}`}>
              <img
                src={dog.image_url}
                alt="dog-pic"
                className="user-dogs-icon"
              />
            </Link>

            <div className="dog-card-desc">
              <Link to={`/dogs/${dog.id}`}>
                <div className="dog-name">{dog.breed_name}</div>
              </Link>
              <div>{dog.description}</div>
            </div>
          </div>
        );
      });
    }

    if (this.props.petShop) {
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
      return (
        <div className="petshop-content">
          <div className="petshop-show-container">
            <div className="petshop-show-top">
              <div>
                <Link to={`/petshops/${id}`}>
                  <img
                    className="petshop-logo"
                    src={image_url}
                    alt="petshop-logo"
                  />
                </Link>
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
