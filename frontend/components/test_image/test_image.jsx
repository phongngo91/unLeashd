import React from "react";

class TestImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      photoFile: null,
      title: ""
    };

    this.handlePicture = this.handlePicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", "phongngo1");
    formData.append("user[email]", "aa@aa.com222");
    formData.append("user[password]", "123123");
    formData.append("user[first_name]", "hellofriend");
    formData.append("user[last_name]", "noway");
    if (this.state.photoFile) {
      formData.append("user[photo]", this.state.photoFile);
    }
    $.ajax({
      url: "/api/users/",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
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

  handle(input) {
    return e =>
      this.setState({
        [input]: e.target.value
      });
  }

  render() {
    return (
      <>
        <input type="file" onChange={this.handlePicture} />
        <img src={this.state.imageUrl} alt="previewImage" />
        <button onClick={this.handleSubmit}>Submit Image</button>
      </>
    );
  }
}

export default TestImage;
