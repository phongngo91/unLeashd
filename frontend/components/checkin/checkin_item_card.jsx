import React from "react";

const CheckinItemCard = props => {
  const {
    id,
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
  // const deleteCheckin = props.deleteCheckin;

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

  // const user_id = props.currentUser.id;
  // let deleteBtn = null;
  // if (author_id === user_id) {
  //   deleteBtn = (
  //     <button
  //       onClick={() => {
  //         if (confirm("Delete the checkin?")) {
  //           deleteCheckin(id);
  //         }
  //       }}
  //     >
  //       Delete Checkin
  //     </button>
  //   );
  // }

  let checkinImage = null;
  if (image_url) {
    checkinImage = (
      <div className="checkin-img-container">
        <img className="checkin-img" src={image_url} alt="checkin-image" />
      </div>
    );
  }
  let checkinBody = null;
  if (checkin_body.length > 0 || rating > 0) {
    let ratingBubble = [];
    if (rating > 0) {
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          ratingBubble.push(<div className="aPaw" />);
        } else {
          ratingBubble.push(<div className="noPaw" />);
        }
      }
    }

    checkinBody = (
      <div className="checkin-body-container">
        <div className="checkin-body-text">{checkin_body}</div>
        <div className="rating-container">{ratingBubble}</div>
      </div>
    );
  }
  let authorAvatar = null;
  if (author.image_url) {
    authorAvatar = (
      <div className="user-avatar-container">
        <img
          src={author.image_url}
          alt="author-image"
          className="users-avatar"
        />
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
      <a href={`/#/users/${author_id}`}>{authorAvatar}</a>
      <div className="checkin-card">
        <div className="checkin-user-info">
          <span className="checkin-top-text">
            <span>
              <a href={`/#/users/${author_id}`} className="dog-name">
                {author.first_name} {author.last_name}
              </a>
            </span>{" "}
            is petting a{" "}
            <a href={`/#/dogs/${dog_breed_id}`} className="dog-name">
              {dog_breed.breed_name}
            </a>{" "}
            at{" "}
            <a href={`/#/petshops/${pet_shop_id}`} className="dog-name">
              {pet_shop}
            </a>
          </span>
        </div>
        {checkinBody}
        <div className="checkin-image-box">{checkinImage}</div>
        {timeShown}
        {/* {deleteBtn} */}
      </div>
      <a href={`/#/dogs/${dog_breed_id}`}>{dogAvatar}</a>
    </div>
  );
};

export default CheckinItemCard;
