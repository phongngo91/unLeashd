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
    this.props.fetchPetShops().then(shops => {
      return this.setState({
        pet_shop_id: Object.values(shops.petShops)[0].id
      });
    });
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
    this.props
      .createDog(formData)
      .then(() => this.props.history.push(`/petshops/${this.state.pet_shop_id}`));
  }

  render() {
    let petShopIds = null;
    if (this.props.petShops) {
      petShopIds = this.props.petShops.map((petShop, idx) => {
        return (
          <option value={petShop.id} key={idx}>
            {petShop.pet_shop_name}
          </option>
        );
      });
    }
    const wrappedPetShops = (
      <select
        id="petshop-list"
        className="select-pet-shop"
        value={this.state.pet_shop_id}
        onChange={this.updatePetShopId()}
      >
        {petShopIds}
      </select>
    );

    return (
      <div className="submit-dog-container">
        <div className="new-dog-tophalf">
          <div className="new-dog-pic">
            <input type="file" onChange={this.handlePicture} />
            <img
              src={this.state.imageUrl}
              alt="Submit Dog Pic"
              className="small-pic"
            />
          </div>
          <div className="new-dog-info">
            <label htmlFor="petshop-list">Pet Shop</label>
            {wrappedPetShops}
            <label htmlFor="breed-name">Breed Name</label>
            <input
              id="breed-name"
              type="text"
              placeholder="Shiba Inu"
              onChange={this.update("breed_name")}
              value={this.state.breed_name}
            />
            <label htmlFor="fluffy">Fluffiness By Volume</label>
            <input
              id="fluffy"
              type="text"
              placeholder="0"
              onChange={this.update("fluff_by_vol")}
              value={this.state.fluff_by_vol}
            />
            <label htmlFor="cute-unit">International Cuteness Unit</label>
            <input
              id="cute-unit"
              placeholder="0"
              onChange={this.update("int_cute_unit")}
              type="text"
              value={this.state.int_cute_unit}
            />
            <label htmlFor="dog-description">Description</label>
            <textarea
              id="dog-description"
              placeholder="A very rowdy boye"
              onChange={this.update("description")}
              value={this.state.description}
            />
          </div>
        </div>
        <button className="add-dog-btn remove-blue" onClick={this.handleSubmit}>
          Create Dog
        </button>
      </div>
    );
  }
}

export default CreateDog;
