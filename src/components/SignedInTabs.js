import React from 'react';
import { NavLink } from 'react-router-dom'

function SignedInTabs() {
    return (


        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start is-size-3">
                <a className="navbar-item">
                    <NavLink to='/'>Clients</NavLink>
                </a>
                <a className="navbar-item">
                    <NavLink to='/'>Events</NavLink>
                </a>
            </div>
        </div>

    );
}

export default SignedInTabs;
