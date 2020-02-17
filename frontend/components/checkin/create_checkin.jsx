import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class CreateCheckinForm extends React.Component {
  constructor(props) {
    super(props);

    const dogShowPath = this.props.location.pathname;
    const dogId = dogShowPath.split("/")[2];

    this.state = {
      author_id: this.props.currentUser.id,
      dog_breed_id: dogId,
      rating: "0",
      checkin_body: "",
      imageUrl: "",
      photoFile: null
    };

    this.handlePicture = this.handlePicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearCheckinErrors();
    }
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
    formData.append("checkin[author_id]", this.state.author_id);
    formData.append("checkin[dog_breed_id]", this.state.dog_breed_id);
    formData.append("checkin[rating]", this.state.rating);
    formData.append("checkin[checkin_body]", this.state.checkin_body);
    if (this.state.photoFile) {
      formData.append("checkin[photo]", this.state.photoFile);
    }

    this.props
      .createCheckin(formData)
      .then(() => this.props.openConfirmCheckinModal());
  }

  render() {
    if (this.props.currentUser === undefined) {
      return <Redirect to="/login" />;
    }

    if (this.props.dog === undefined) {
      return <Redirect to="/dogs" />;
    }

    return (
      <div className="checkin-container">
        <div className="checkin-header">
          <div className="checkin-text">Check-in</div>
          <div
            className="x-button"
            style={{
              backgroundImage: `url(${window.whitex})`
            }}
            onClick={() => this.props.closeModal()}
          ></div>
        </div>
        <div className="checkin-body-img">
          <textarea
            className="checkin-body"
            cols="30"
            rows="10"
            placeholder="What did you think?"
            onChange={this.update("checkin_body")}
            value={this.state.checkin_body}
          ></textarea>
          <div className="img-preview">
            <input type="file" onChange={this.handlePicture} />
            <div className="preview-checkin-pic">
              <img className="preview-checkin-img" src={this.state.imageUrl} alt="Submit Checkin Pic" />
            </div>
          </div>
        </div>
        <div className="checkin-submit-container">
          <input
            type="range"
            min="0"
            max="5"
            className="checkin-slider"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <div className="rating-container">
            <div className="rating-display">
              {this.state.rating === "0" ? "No" : this.state.rating}
              <br />
              {this.state.rating === "0" ? "Rating" : "PAWS"}
            </div>
          </div>
          <div className="checkin-submit-btn" onClick={this.handleSubmit}>
            Confirm
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateCheckinForm);
