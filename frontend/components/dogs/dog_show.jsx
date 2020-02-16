import React from "react";
import { Link } from "react-router-dom";

class DogShow extends React.Component {
  constructor(props) {
    super(props);

    this.openCheckinModal = this.openCheckinModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchDog(this.props.match.params.dogId);
  }

  openCheckinModal(){
    this.props.openCheckinModal();
  }

  render() {
    let editBtn = null;
    if (this.props.loggedInUser && this.props.dog) {
      if (this.props.loggedInUser.id === this.props.dog.author_id) {
        editBtn = <Link to={`/dogs/${this.props.dog.id}/edit`}>Edit Dog</Link>;
      }
    }

    if (this.props.dog) {
      const {
        id,
        breed_name,
        image_url,
        description,
        author_id,
        pet_shop_id
      } = this.props.dog;
      const dog_author = this.props.users[author_id];
      const dog_pet_shop = this.props.pet_shops[pet_shop_id];

      if (dog_author === undefined || dog_pet_shop === undefined) {
        return null;
      }

      return (
        <div className="petshop-show-container">
          <div>
            <img className="petshop-logo" src={image_url} alt="dog's image" />
            <div>{editBtn}</div>
          </div>
          <div className="petshop-show-description">
            <div className="dog-links">
              <div className="dog-assotiations">
                <div className="petshop-name">{breed_name}</div>
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
              >
              </div>
            </div>
            <div className="petshop-loc">{description}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DogShow;
