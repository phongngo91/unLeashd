import React from "react";

class Spash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentUser = this.props.currentUser;
        if (currentUser){
            return (<h4>YOU ARE LOGGED IN</h4>)
        } else
        return (
            <div>
                LOG IN AND SIGN UP BUTTON GOES HERE
            </div>
        )
    }
}

export default Spash;
