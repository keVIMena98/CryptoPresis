import React from 'react'
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SidebarMenu,
    SidebarLink,
    SideSocialIcon,
    SocialIconLink,
    // Link
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    {/* <SidebarLink to="Home" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        HOME
                    </SidebarLink> */}
                    <SidebarLink to="Mint" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        BUY A PRESI
                    </SidebarLink>
                    <SidebarLink to="Roadmap" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        ROADMAP
                    </SidebarLink>
                    <SidebarLink to="Collection" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        COLLECTION
                    </SidebarLink>
                    <SidebarLink to="Team" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        TEAM
                    </SidebarLink>
                    <SidebarLink to="FAQ" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        FAQ
                    </SidebarLink>
                </SidebarMenu>
                <SideSocialIcon>
                    <SocialIconLink href="//twitter.com/CryptoPresis" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="//instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//discord.gg/cryptopresis" target="_blank" aria-label="Discord">
                        <FaDiscord />
                    </SocialIconLink>
                </SideSocialIcon>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
