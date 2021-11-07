import React from 'react';
import { NavSocialIcon } from '../Navbar/NavbarElements';
import SocialFollow from '../SocialFollow';
// import {animateScroll as scroll} from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    //FooterLinkTitle2
    //FooterLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle to="projects"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Projects</FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle to="about">About Us</FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle to="charity">Charity</FooterLinkTitle>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                <NavSocialIcon>
                                    <SocialFollow />
                                </NavSocialIcon>
                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
