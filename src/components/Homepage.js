import React from 'react';
import { Link } from "react-router-dom";

const Homepage = () =>(
    <div className="row">
        <div className="container shadow">
            <h1 className="display-1">What's happening</h1>
            <p className="lead">New to our messenger</p>

            <Link to="/signup" className="btn btn-primary">
                Sign up here
            </Link>
        </div>
    </div>
)

export default Homepage;