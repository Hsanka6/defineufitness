import React from 'react'
import SignedInTabs from './SignedInTabs'
import SignedOutTabs from './SignedOutTabs'

const Navbar = () => {
    return (
        <nav className="navbar has-navbar-fixed-top is-transparent has-text-grey-lighter" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="50"/>
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