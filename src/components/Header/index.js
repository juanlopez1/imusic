import React from 'react';
import {
    Col, Image, Navbar, NavbarBrand
} from 'react-bootstrap';

import logo from '../../images/logo-white.png';
import Searcher from './Searcher';

const Header = () => (
    <header>
        <Navbar color="dark" expand="md">
            <Col sm={2}>
                <NavbarBrand>
                    <Image src={logo}/>
                    &nbsp;
                    iMusic
                </NavbarBrand>
            </Col>
            <Col sm={{span: 3, offset: 7}}>
                <Searcher/>
            </Col>
        </Navbar>
    </header>
);

export default Header;
