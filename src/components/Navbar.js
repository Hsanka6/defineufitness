import React from 'react'
import SignedInTabs from './SignedInTabs'
import SignedOutTabs from './SignedOutTabs'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
      // <!--has-navbar-fixed-top is-transparent--!>
        <nav className="navbar " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <NavLink to='/'>DefineUFitness</NavLink>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <SignedInTabs />
            <SignedOutTabs />
        </nav>
    );
}
export default Navbar
