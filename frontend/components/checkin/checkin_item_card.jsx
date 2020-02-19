import React from "react";
import { Link } from "react-router-dom";

const CheckinItemCard = props => {
  const {
    image_url,
    checkin_body,
    dog_breed,
    author,
    rating,
    pet_shop,
    pet_shop_id,
    author_id,
    dog_breed_id,
    created_at
  } = props.checkin;

  const diffInMilli = new Date() - new Date(created_at);
  const diffInMinutes = diffInMilli / 60000;
  let timeShown = null;
  if (diffInMinutes < 60) {
    timeShown = (
      <div className="minutes-ago">{Math.floor(diffInMinutes)} Minutes ago</div>
    );
  } else {
    timeShown = (
      <div className="minutes-ago">{new Date(created_at).toDateString()}</div>
    );
  }

  const user_id = props.currentUser.id;

  let checkinImage = null;
  if (image_url) {
    checkinImage = (
      <div className="checkin-img-container">
        <img className="checkin-img" src={image_url} alt="checkin-image" />
      </div>
    );
  }
  let checkinBody = null;
  if (checkin_body.length > 0) {
    checkinBody = (
      <div className="checkin-body-container">
        <div className="checkin-body-text">{checkin_body}</div>
      </div>
    );
  }
  let authorAvatar = null;
  if (author.image_url) {
    authorAvatar = (
      <div className="user-avatar-container">
        <img src={author.image_url} alt="author-image" className="users-avatar" />
      </div>
    );
  }
  let dogAvatar = null;
  if (dog_breed.image_url) {
    dogAvatar = (
      <div className="dog-avatar-container">
        <img
          src={dog_breed.image_url}
          alt="author-image"
          className="dog-avatar"
        />
      </div>
    );
  }
  return (
    <div className="checkin-container">
      {authorAvatar}
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
        {timeShown}
      </div>
      {dogAvatar}
    </div>
  );
};

export default CheckinItemCard;