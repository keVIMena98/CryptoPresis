import React from 'react'
import { FaTwitter } from 'react-icons/fa';
import Icon1 from '../../assets/images/205.png';
import Icon2 from '../../assets/images/207.png';
import Icon3 from '../../assets/images/192.png';
import {
    TeamContainer,
    TeamWrapper,
    TeamCard,
    TeamProfile,
    TeamH1,
    TeamH2,
    TeamH3,
    // TeamP,
    SocialIconLink
} from './TeamElements';

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


