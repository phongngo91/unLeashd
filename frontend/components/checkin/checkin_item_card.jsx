import React from "react";
import { Link } from "react-router-dom";

const CheckinItemCard = props => {
  const {
    image_url,
    checkin_body,
    dog_breed,
    author,
    pet_shop,
    pet_shop_id,
    author_id,
    dog_breed_id
  } = props.checkin;

  let checkinImage = null;
  let checkinBody = null;
  if (image_url) {
    checkinImage = (
      <div className="checkin-img-container">
        <img className="checkin-img" src={image_url} alt="checkin-image" />
      </div>
    );
  }
  if (checkin_body.length > 0) {
    checkinBody = (
      <div className="checkin-body-container">
        <div className="checkin-body-text">{checkin_body}</div>
      </div>
    );
  }

  return (
    <div className="checkin-card">
      <div className="checkin-user-info">
        <span>
          <span>
            <Link to={`users/${author_id}`} className="dog-name">
              {author.first_name} {author.last_name}
            </Link>
          </span>{" "}
          is petting a{" "}
          <Link to={`dogs/${dog_breed_id}`} className="dog-name">
            {dog_breed.breed_name}
          </Link>{" "}
          at{" "}
          <Link to={`/petshops/${pet_shop_id}`} className="dog-name">
            {pet_shop}
          </Link>
        </span>
      </div>
      {checkinBody}
      <div>{checkinImage}</div>
    </div>
  );
};

export default CheckinItemCard;