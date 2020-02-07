import React from "react";

class sessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => (
            this.setState({
                [property]: e.target.value
            })
        );
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(
            // this.setState({
            //     username: "",
            //     password: ""
            // })
            () => this.props.history.push('/')
        );
    }

    render() {
        const errorsEl = this.props.errors.session.map((error, idx)=>{
            return (<li key={idx}>{error}</li>)
        }
        );
        return (
            <>
                <h1>My {this.props.formType} Form</h1>
                <p>Errors:{errorsEl}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input onChange={this.update('username')} type="text" value={this.state.username}/>
                    </label>
                    <br />
                    <label>Password
                        <input onChange={this.update('password')} type="password" value={this.state.password}/>
                    </label>
                    <br />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default sessionForm;