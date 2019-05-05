import React from 'react';
import {Navbar, NavbarBrand, Media} from 'reactstrap';

import logo from '../../images/logo-white.png';

const Header = () => (
    <header>
        <Navbar color="dark" light expand="md">
            <div className="nav-container">
                <NavbarBrand>
                    <Media object src={logo} alt="iMusic" className="nav-logo"/>
                    iMusic
                </NavbarBrand>
            </div>
        </Navbar>
    </header>
);

export default Header;
