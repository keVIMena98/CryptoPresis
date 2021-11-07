import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SidebarMenu,
    SidebarLink,
    SideSocialIconWrap
} from './SidebarElements';
import SocialFollow from '../SocialFollow';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SidebarMenu>
                    <SidebarLink to="projects" onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                        About Us
                    </SidebarLink>
                    <SidebarLink to="charity" onClick={toggle}>
                        Charity
                    </SidebarLink>
                </SidebarMenu>
                <SideSocialIconWrap>
                    <SocialFollow />
                </SideSocialIconWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
