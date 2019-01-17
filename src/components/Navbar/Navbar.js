import React, { Component } from 'react';
import book from "../../img/book02.png";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary"><img src={book} alt="management logo" />
                <a className="navbar-brand" id="simpsons-title" href="/">NYT Google Books Search</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;