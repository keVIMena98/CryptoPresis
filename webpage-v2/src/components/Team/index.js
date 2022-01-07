import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import Icon1 from '../../assets/images/205.png';
import Icon2 from '../../assets/images/207.png';
import Icon3 from '../../assets/images/192.png';
import styled from 'styled-components';

export const TeamContainer = styled.div`
    height: 100%;
    max-height: 3000px;
    display: flex;
    flex-direction: column;
    jusify-content: center;
    align-items: center;
    background: #000;
    padding: 48px 24px;


    @media screen and (max-width: 768px) {
        height: 100%;
        max-height: 1500px;
        padding: 48px 24px;
    }

    @media screen and (max-width: 480px) {
        height: 100%;
        max-height: 6000px;
        padding: 48px 24px;
    }

    @media screen and (max-width: 375px) {
        height: 100%;
        max-height: 10000px;
        padding: 48px 24px;
    }
`

export const TeamWrapper = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 15px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 12px;
    }
`

export const TeamCard = styled.div`
    background: #000;
    border: 4px dashed #00FFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 450px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 480px) {
        max-height: 300px;
    }
`

export const TeamProfile = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        height: 200px;
        width: 200px;
    }
`

export const TeamH1 = styled.h1`
    padding: 24px 0 24px 0;
    font-size: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const TeamH2 = styled.h2`
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: 0.5rem;
    }
`

export const TeamH3 = styled.h3`
    font-size: 0.8rem;
    color: #ffffff;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: 0.4rem;
    }
`

export const TeamP = styled.p`
    font-size: 0.7rem;
    color: #ffffff;
    text-align: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 20px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`

const Team = () => {
    return (
        <TeamContainer id="Team">
            <TeamH1>THE TEAM</TeamH1>
            <TeamWrapper>
                <TeamCard>
                    <TeamProfile src={Icon1}/>
                    <TeamH3>Capitan Capibara</TeamH3>
                    <TeamH2>Project Lead</TeamH2>
                    {/*<TeamP>
                        Surfing enthusiast with over 15 years of experience in
                        business management.
                    </TeamP>*/}
                    <SocialIconLink href="//twitter.com/capitancapibara" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </TeamCard>
                <TeamCard>
                    <TeamProfile src={Icon2}/>
                    <TeamH3>ackermann.eth</TeamH3>
                    <TeamH2>Developer</TeamH2>
                    {/*<TeamP>
                        Biochemist in the process making big moves in Blockchain and Web3.
                    </TeamP>*/}
                    <SocialIconLink href="//twitter.com/ackermann_eth" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </TeamCard>
                <TeamCard>
                    <TeamProfile src={Icon3}/>
                    <TeamH3>Pxl Plnktn</TeamH3>
                    <TeamH2>Artist</TeamH2>
                    {/*<TeamP>
                        Creator of CryptoPresis, bringing his expertise as an illustrator to life.
                    </TeamP>*/}
                    <SocialIconLink href="//twitter.com/PxlPlnktn" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                </TeamCard>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default Team


