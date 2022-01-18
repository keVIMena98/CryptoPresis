import React, {useState, useEffect} from 'react';
import {FaBars, FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import Dropdown from '../Dropdown';

export const Nav = styled.nav`
    background: #000;
    height: 100px;
    // margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding 0 24px;
    // max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    cursor: pointer;
    display; grid;
    align-items: center;
    margin: 24px 0 24px 0;

    @media screen and (max-width: 768px) {
        cursor: pointer;
        display; grid;
        align-items: center;
        margin-right: 24px;
    }
`

export const ImgLogo = styled.img`
    width: 250px;
    align-items: center;
    transition: width 0.5s;
    transition: height 0.5s;

    @media screen and (max-width: 768px) {
        width: 200px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        margin: 10px 0 0 0;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 100px;
`

export const NavLinksS = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #00FFFF;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`;

// export const NavLinksR = styled(LinkR)`
//     color: #fff;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;

//     &.active {
//         border-bottom: 3px solid #00FFFF;
//     }

//     &:hover {
//         transition: all 0.2s ease-in-out;
//         color: #00ffff;
//     }
// `

export const NavSocialIcon = styled.nav`
    display: flex;
    margin-left: 24px;
    margin-right: 24px;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;
    width: 90px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`

export const Link = styled.a`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`

const Navbar = ({ toggle }) => {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    
    const [scrollNav, setScrollNav] = useState(false);

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
                            {/* <NavItem>
                                <NavLinks to="Home" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    HOME
                                </NavLinks>
                            </NavItem> */}
                            <NavItem>
                                <NavLinksS to="Mint" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    BUY A PRESI
                                </NavLinksS>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="Roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    ROADMAP
                                </NavLinksS>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="Collection" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    COLLECTION
                                </NavLinksS>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="Team" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    TEAM
                                </NavLinksS>
                            </NavItem>
                            <NavItem>
                                <NavLinksS to="FAQ" smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                    FAQ
                                </NavLinksS>
                            </NavItem>
                            <NavItem  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                <NavLinksS>
                                    MEMBERS <i className='fas fa-caret-down' />
                                </NavLinksS>
                                {dropdown && <Dropdown />}
                            </NavItem>
                            <NavSocialIcon>
                                <SocialIconLink href="//twitter.com/CryptoPresis" target="_blank" aria-label="Twitter" >
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="//instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram" >
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//discord.gg/q2pZhNKBsg" target="_blank" aria-label="Discord" >
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
