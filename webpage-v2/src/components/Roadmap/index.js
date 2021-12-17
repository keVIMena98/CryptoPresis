import React from 'react';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow,
    TitleContainer,
    // Column1, 
    Column2, 
    // TextWrapper1,
    TextWrapper2,
    Heading, 
    // Subtitle1,
    Subtitle2
} from './roadmapElements';

const Roadmap = () => {
    return (
        <>
            <InfoContainer id="Roadmap">
                <InfoWrapper>
                    <TitleContainer>
                        <Heading>ROADMAP 1.0</Heading>
                    </TitleContainer>
                    <InfoRow>
                        {/* <Column1>
                            <TextWrapper1>
                                <Subtitle1>5%</Subtitle1>
                                <Subtitle1>10%</Subtitle1>
                                <Subtitle1>20%</Subtitle1>
                                <Subtitle1>40%</Subtitle1>
                                <Subtitle1>60%</Subtitle1>
                                <Subtitle1>80%</Subtitle1>
                                <Subtitle1>100%</Subtitle1>
                            </TextWrapper1>
                        </Column1> */}
                        <Column2>
                            <TextWrapper2>
                                <Subtitle2>
                                    future art collections launch. Free to mint NFTs by local artists for genesis holders.
                                </Subtitle2>
                                <Subtitle2>
                                    Launch of 10000 piece collection. Mind-blowing art and tons more traits.
                                </Subtitle2>
                                <Subtitle2>
                                    Launch of the member-exclusive CryptoPresis Merch Store, featuring
                                    limited edition tee, hooodies and other goodies.
                                </Subtitle2>
                                <Subtitle2>
                                    CryptoPresis Genesis holders can vote on future use of funds available 
                                    for social responsibility and post-launch member-exclusive benefits.
                                </Subtitle2>
                                <Subtitle2>
                                    Deliver CryptoPresi #1 with tokenID: 1 to the president of El Salvador,
                                    Nayib Bukele.
                                </Subtitle2>
                                <Subtitle2>
                                    Donate 10% to charitable organizations in El Salvador with the 
                                    purpose of spreading education in the general cryptocurrency space.
                                </Subtitle2>
                                <Subtitle2>
                                    Purchase an estate in the metaverse for member-exclusive parties, events and get-togethers.
                                </Subtitle2>
                            </TextWrapper2>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Roadmap;
