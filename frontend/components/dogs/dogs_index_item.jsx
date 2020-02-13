import React from "react";

const DogIndexItem = props => {
  const { breed_name, image_url, description } = props.dog;

  return (
    <div className="dog-container">
      <img className="dog-avatar" src={image_url} alt="dog-pic" />
      <div className="dog-info-box">
        <div className="dog-name">{breed_name}</div>
        <div className="dog-description">{description}</div>
      </div>
    </div>
  );
};

export default DogIndexItem;
