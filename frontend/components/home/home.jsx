import React from 'react';

class Banner extends React.Component{
    constructor(props){
        super(props);
    }


    render(){

        const currentUser = this.props.currentUser;
        if (currentUser){
            return (
                <>
                    <h3>Welcome!, {currentUser.username}</h3>
                    <button onClick={this.props.logout}>Log Out</button>
                </>
            )
        } else 
        return (
                <h1>Banner</h1>
        )
    }
}

export default Banner;