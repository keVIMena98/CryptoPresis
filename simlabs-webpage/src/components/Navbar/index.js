import React from 'react';
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavSocialIcon,
    NavSocialIconLink 
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Simlabs
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="charity">Charity</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavSocialIcon>
                        <NavSocialIconLink to='/twitter'>twitter</NavSocialIconLink>
                    </NavSocialIcon>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
