import React, {Component } from 'react';

export default class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : 'signin';
        console.log('Logged in successfully');
        this.props.onAuth(authType, this.state).then(() => {
            debugger
            console.log('Logged in successfully');
        });
    }

    render(){
        const { email, username, password, profileImageUrl} = this.state;
        const { buttonText, heading , signUp, errors, history, removeError } = this.props;

        //this will remove any error that was displayed before route change.
        history.listen(() =>{
            removeError()
        })

        return(
            <div className="row justify-content-md-center text-center">
                <div className="col-md-6 shadow">
                    <form onSubmit={this.handleSubmit}>
                        <h3 className="heading-3">{heading}</h3>
                        {errors.message && (
                            <div className="alert alert-danger">
                                {errors.message}
                            </div>
                        )}
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            onChange={this.handleChange} 
                            value={email}
                        />
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password" 
                            onChange={this.handleChange}
                        />

                        { signUp && (
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    name="username" 
                                    onChange={this.handleChange} 
                                    value={username}
                                />
                                <label htmlFor="image-url">Image Url:</label>
                                <input 
                                    type="image-url" 
                                    className="form-control" 
                                    id="image-url" 
                                    name="profileImageUrl" 
                                    onChange={this.handleChange} 
                                    value={profileImageUrl}
                                />
                            </div>
                        )}
                        <button className="btn btn-primary mt-3" type="submit">
                            { buttonText }
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}