import React, {useState, useEffect} from 'react';
import {FaBars, FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
// import {ExternalLink as Link} from 'react-external-link';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    ImgLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavSocialIcon,
    SocialIconLink,
    //Link
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <ImgLogo src={require("../../assets/images/logo.png")} alt="logo"/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="Home" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    HOME
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="Mint" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    BUY A PRESI
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="Roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    ROADMAP
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="Collection" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    COLLECTION
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="Team" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    TEAM
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="FAQ" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    FAQ
                                </NavLinks>
                            </NavItem>
                            <NavSocialIcon>
                                <SocialIconLink href="//twitter.com/CryptoPresis" target="_blank" aria-label="Twitter" >
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="//instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram" >
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//discord.gg/cryptopresis" target="_blank" aria-label="Discord" >
                                    <FaDiscord />
                                </SocialIconLink>
                            </NavSocialIcon>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
