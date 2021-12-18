import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

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
    max-width: 1100px;
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

export const NavLinks = styled(LinkS)`
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
