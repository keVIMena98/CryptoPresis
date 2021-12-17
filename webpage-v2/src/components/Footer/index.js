import React from 'react';
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    ImgLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    ExternalLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Home</FooterLinkTitle>
                            <FooterLink to="Mint" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Mint</FooterLink>
                            <ExternalLink href="//rarible.com/cryptopresisofficial" target="_blank" >Rarible</ExternalLink>
                            <FooterLink to="Roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-100} >Roadmap</FooterLink>
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
                        <SocialLogo to="Home" smooth={true} duration={500} spy={true} exact='true' offset={-100} >
                            <ImgLogo src={require("../../assets/images/logo.png")} alt="logo"/>
                        </SocialLogo>
                        <WebsiteRights>Made with <span role="img" aria-label="Heart">💖</span>  and a whole lot of
                        <span role="img" aria-label="Heart"> 🍷</span>. Simlabs © {new Date().getUTCFullYear()} All Right Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.twitter.com/CryptoPresis" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/cryptopresisnft" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.discord.com/cryptopresis" target="_blank" aria-label="Discord">
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
