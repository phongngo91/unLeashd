import React from "react";

class PetShopShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.petShop;
  }

  componentDidMount() {
    this.props.fetchPetShop(this.props.match.params.petShopId);
  }

  render() {
    if (this.props.petShop){
    const { image_url } = this.props.petShop;
    return (<div className="petshop-show-container">
      <div>
        <img src={image_url} alt=""/>
      </div>
      <div>
        
      </div>
    </div>)
    } else {
      return <div>Page Not Found</div>;
    }
  }
}

export default PetShopShow;
