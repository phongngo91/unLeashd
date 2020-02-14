import React from "react";
import { Link } from "react-router-dom";
const DogIndexItem = props => {
  const { id, breed_name, image_url, description } = props.dog;

  return (
    <div className="dog-container">
      <Link to={`/dogs/${id}`}>
        <img className="dog-avatar" src={image_url} alt="dog-pic" />
      </Link>
      <div className="dog-info-box">
        <div className="dog-name">{breed_name}</div>
        <div className="dog-description">{description}</div>
      </div>
    </div>
  );
};

export default DogIndexItem;
