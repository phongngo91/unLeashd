import React from "react";

class CheckinConfirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="checkin-container">
          <div>Checkin Completed!</div>
          <div className="hover-cursor" onClick={() => this.props.closeModal()}>Continue</div>
        </div>
      </>
    );
  }
}

export default CheckinConfirm;
