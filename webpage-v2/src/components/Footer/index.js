import React from 'react';
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const FooterContainer = styled.footer`
    background-color: #009999;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    // max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    // max-width: 1100px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: right;
    width: 200px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(LinkS)`
    color: #fff;
    text-align: left;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 12px;

    &:hover {
        color: #00ffff;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    // max-width: 1100px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // max-width: 1100px;
    width: 100%;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        text-align: left;
    }
`

export const SocialLogo = styled(LinkR)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        cursor: pointer;
        display; grid;
        justify-content: center;
        margin-right: 24px;
    }
`

export const ImgLogo = styled.img`
    width: 250px;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 200px;
        margin 0 0 0 20px;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    font-size: 10px;
    text-align: center;
    margin: 0 48px;
    margin-bottom: 12px;

    @media screen and (max-width: 768px) {
        margin: 0 0 12px 0;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    margin-bottom: 15px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 20px;
`

export const ExternalLink = styled.a`
    color: #fff;
    text-align: left;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 12px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Home</FooterLinkTitle>
                            <FooterLink to="Mint" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Buy A Presi</FooterLink>
                            <FooterLink to="Roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Roadmap</FooterLink>
                            <FooterLink to="Collection" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Collection</FooterLink>
                            <FooterLink to="Team" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Team</FooterLink>
                            <FooterLink to="FAQ" smooth={true} duration={500} spy={true} exact='true' offset={-100} >FAQ</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Charity</FooterLinkTitle>
                            <FooterLink to="/">Bitcoin Beach</FooterLink>
                            <FooterLink to="/">Crypto Education</FooterLink>
                            <FooterLink to="/">Local Artists</FooterLink>
                            <FooterLink to="/">Community</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Legal</FooterLinkTitle>
                            <FooterLink to="/">Terms & Conditions</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome} >
                            <ImgLogo src={require("../../assets/images/logo.png")} alt="logo"/>
                        </SocialLogo>
                        <WebsiteRights>Made with <span role="img" aria-label="Heart">💖</span>  and a whole lot of
                        <span role="img" aria-label="Heart"> 🍷</span>. Simlabs © {new Date().getUTCFullYear()} All Rights Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//twitter.com/CryptoPresis" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//discord.gg/q2pZhNKBsg" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
