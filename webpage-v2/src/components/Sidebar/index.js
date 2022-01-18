import React from 'react'
import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
// import Dropdown from '../Dropdown';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarItem = styled.li`
    height: 100px;
`

export const SidebarLinksS = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out:
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #00ffff;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarLinksR = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out:
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #00ffff;
        transition: 0.2s ease-in-out;
    }
`

export const SideSocialIcon = styled.div`
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
    margin-top: 48px;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    padding: 0 10px 0 10px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out:
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #00ffff;
        transition: 0.2s ease-in-out;
    }
`

const Sidebar = ({isOpen, toggle}) => {
    // const [dropdown, setDropdown] = useState(false);

    // const onMouseEnter = () => {
    //     if(window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //     }
    // };

    // const onMouseLeave = () => {
    //     if(window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false);
    //     }
    // };

    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    {/* <SidebarItem>
                        <SidebarLink to="Home" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            HOME
                        </SidebarLink>
                    </SidebarItem> */}
                    <SidebarItem>
                        <SidebarLinksS to="Mint" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            BUY A PRESI
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="Roadmap" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            ROADMAP
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="Collection" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            COLLECTION
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="Team" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            TEAM
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS to="FAQ" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            FAQ
                        </SidebarLinksS>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksR to="/drop" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            DROP
                        </SidebarLinksR>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLinksS onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                            MERCH (Coming Soon)
                        </SidebarLinksS>
                    </SidebarItem>
                    {/* <SidebarItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                        <SidebarLinksR to="" >
                            MEMBERS <i className='fas fa-caret-down' />
                        </SidebarLinksR>
                        {dropdown && <Dropdown />}
                    </SidebarItem> */}
                </SidebarMenu>
                <SideSocialIcon>
                    <SocialIconLink href="//twitter.com/CryptoPresis" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="//instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//discord.gg/q2pZhNKBsg" target="_blank" aria-label="Discord">
                        <FaDiscord />
                    </SocialIconLink>
                </SideSocialIcon>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
