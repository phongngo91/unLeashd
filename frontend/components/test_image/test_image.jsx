import React from "react";

class TestImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      imageFile: null
    };

    this.handlePicture = this.handlePicture.bind(this);
  }

  handlePicture(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({
        imageUrl: reader.result,
        imageFile: file
      });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  render() {
    return (
      <>
        <input type="file" onChange={this.handlePicture} />
        <img src={this.state.imageUrl} alt="previewImage" />
      </>
    );
  }
}

export default TestImage;
