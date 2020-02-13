import React from "react";

class CreateDog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      photoFile: null,
      breed_name: "",
      description: "",
      fluff_by_vol: 0,
      int_cute_unit: 0,
      pet_shop_id: 0,
      author_id: this.props.currentUser.id
    };

    this.handlePicture = this.handlePicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
    return e =>
      this.setState({
        [type]: e.target.value
      });
  }

  handlePicture(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({
        imageUrl: reader.result,
        photoFile: file
      });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("dog[breed_name]", this.state.breed_name);
    formData.append("dog[description]", this.state.description);
    formData.append("dog[fluff_by_vol]", this.state.fluff_by_vol);
    formData.append("dog[int_cute_unit]", this.state.int_cute_unit);
    formData.append("dog[pet_shop_id]", this.state.pet_shop_id);
    formData.append("dog[author_id]", this.state.author_id);
    if (this.state.photoFile) {
      formData.append("dog[photo]", this.state.photoFile);
    }
    $.ajax({
      url: "/api/dog_breeds/",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    });
  }

  render() {
    return (
      <div className="submit-dog-container">
        <input type="file" onChange={this.handlePicture} />
        <img src={this.state.imageUrl} alt="previewImage" className="small-pic"/>
        <label>
          Breed Name
          <input
            type="text"
            onChange={this.update("breed_name")}
            value={this.state.breed_name}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            onChange={this.update("description")}
            value={this.state.description}
          />
        </label>
        <label>
          {" "}
          Fluffyness
          <input
            type="number"
            onChange={this.update("fluff_by_vol")}
            value={this.state.fluff_by_vol}
          />
        </label>
        <label>
          International Cuteness Unit
          <input
            onChange={this.update("int_cute_unit")}
            type="number"
            value={this.state.int_cute_unit}
          />
        </label>
        <label>
          Pet Shop Id
          <input
            onChange={this.update("pet_shop_id")}
            type="number"
            value={this.state.pet_shop_id}
          />
        </label>
        <button onClick={this.handleSubmit}>Create Dog</button>
      </div>
    );
  }
}

export default CreateDog;
