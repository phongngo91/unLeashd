import React from "react";
import { Redirect } from "react-router-dom";

class CreateCheckinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author_id: this.props.currentUser.id,
      dog_breed_id: this.props.dog[0].id,
      rating: null,
      checkin_body: "",
      imageUrl: "",
      photoFile: null
    };

    // this.handlePicture = this.handlePicture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors) {
      this.props.clearCheckinErrors();
    }
  }

  // handlePicture(e) {
  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () =>
  //     this.setState({
  //       imageUrl: reader.result,
  //       photoFile: file
  //     });

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ imageUrl: "", photoFile: null });
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("checkin[author_id]", this.state.author_id);
    formData.append("checkin[dog_breed_id]", this.state.dog_breed_id);
    formData.append("checkin[rating]", this.state.rating);
    formData.append("checkin[checkin_body]", this.state.checkin_body);
    // if (this.state.photoFile) {
    //   formData.append("dog[photo]", this.state.photoFile);
    // }
    // this.props
    //   .action(formData)
    //   .then(() =>
    //     this.props.history.push(`/petshops/${this.state.pet_shop_id}`)
    //   );
    this.props.createCheckin(formData).then(
      () => this.props.openConfirmCheckinModal()
    );
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
        <div className="checkin-submit-container">
          <div className="checkin-submit-btn" onClick={this.handleSubmit}>
            Confirm
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCheckinForm;
