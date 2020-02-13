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

  componentDidMount() {
    this.props.fetchPetShops();
  }

  update(type) {
    return e =>
      this.setState({
        [type]: e.target.value
      });
  }

  updatePetShopId() {
    return e => {
      return this.setState({
        pet_shop_id: e.currentTarget.selectedOptions[0].value
      });
    };
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
    // $.ajax({
    //   url: "/api/dog_breeds/",
    //   method: "POST",
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // });
    this.props.createDog(formData).then(
      this.props.history.push(`/petshops/${this.state.pet_shop_id}`)
    );
  }

  render() {
    let petShopIds = null;
    if (this.props.petShops) {
      petShopIds = this.props.petShops.map((petShop, idx) => {
        return <option value={petShop.id} key={idx}>{petShop.pet_shop_name}</option>;
      });
    }
    const wrappedPetShops = (
      <select
        value={this.state.pet_shop_id}
        onChange={this.updatePetShopId()}
      >
        {petShopIds}
      </select>
    );

    return (
      <div className="submit-dog-container">
        <input type="file" onChange={this.handlePicture} />
        <img
          src={this.state.imageUrl}
          alt="previewImage"
          className="small-pic"
        />
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
          Pet Shop
          {/* <input
            onChange={this.update("pet_shop_id")}
            type="number"
            value={this.state.pet_shop_id}
          /> */}
          {wrappedPetShops}
        </label>
        <button onClick={this.handleSubmit}>Create Dog</button>
      </div>
    );
  }
}

export default CreateDog;
