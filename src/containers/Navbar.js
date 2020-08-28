import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import AppIndicator from 'bootstrap-icons/icons/app-indicator.svg';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={AppIndicator} alt="try this" className="icons"/>
                        Messenger
                    </Link>
                    <button type="button" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto mb-2 lg-0">
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link"> Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signin" className="nav-link"> Sign in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser
    }
};


export default connect(mapStateToProps, null)(Navbar);