import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBarWrapper,
    SidebarMenu,
    SidebarLink,
    SideSocialIconWrap,
    SideSocialIconRoute
} from './SidebarElements';

const Sidebar = (isOpen, toggle) => {
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
                    <SideSocialIconRoute to='/twitter'>twitter</SideSocialIconRoute>
                </SideSocialIconWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
