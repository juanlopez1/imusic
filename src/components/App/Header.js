import React from 'react';
import {Image, Navbar, NavbarBrand} from 'react-bootstrap';

import logo from '../../images/logo-white.png';

const Header = () => (
    <header>
        <Navbar color="dark" expand="md">
            <div className="nav-container">
                <NavbarBrand>
                    <Image src={logo}/>
                    &nbsp;
                    iMusic
                </NavbarBrand>
            </div>
        </Navbar>
    </header>
);

export default Header;
