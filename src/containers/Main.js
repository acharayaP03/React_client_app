import React from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import Homepage from '../components/Homepage';


const Main = porps =>{
    return(
        <div  className="hero-section">
            <Switch>
                <Route exact path="/" render={ props => <Homepage { ...porps } />} />
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