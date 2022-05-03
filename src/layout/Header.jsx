import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="blue darken-4">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">React restaurant</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#!"><i className="material-icons">more_vert</i></a></li>
                </ul>
            </div>
        </nav>        
    );
}

export {Header};