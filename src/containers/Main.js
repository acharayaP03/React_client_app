import React from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';


const Main = props =>{
    return(
        <div  className="hero-section">
            <Switch>
                <Route exact path="/" render={ props => <Homepage { ...props } />} />
                <Route 
                    exact 
                    path="/signin"
                    render={ props => { 
                        return(
                                <AuthForm buttonText="Log in" heading="Welocme back" {...props} />
                            )
                        }
                    } 
                />
                <Route 
                    exact 
                    path="/signup"
                    render={ props => { 
                        return(
                                <AuthForm signup buttonText="Sign me up!" heading=" Join our messenger Today" {...props} />
                            )
                        }
                    } 
                />
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    }
};


export default withRouter(connect(mapStateToProps, null)(Main));