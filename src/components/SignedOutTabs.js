import React from 'react';
import { NavLink } from 'react-router-dom'



function ClientList() {
    return (
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item is-size-3">
                    <NavLink to='/'>Login</NavLink>

                </div>
            </div>
        </div>
    );
}

export default ClientList;
