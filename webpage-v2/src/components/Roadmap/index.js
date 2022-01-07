import React from 'react';
import styled from 'styled-components';
// import { Chrono } from 'react-chrono';

export const InfoContainer = styled.div `
    color: #fff;
    background: #000;

    @media screen and (max-width: 768px) {
        padding: 48px 24px 0 24px;
        height: 100%;
        max-height: 3000px;
    }

    @media screen and (max-width: 375px) {
        padding: 48px 24px;
        height: 100%;
        max-height: 6000px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 10fr);
    width: 100%
    // max-width: 1100px;
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 760 px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    max-height: 970px;
    width: 100%;
    // max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center; 
`;

export const TitleContainer = styled.div`
    display: flex;
    padding: 24px 0 24px 0;
    width: 100%;
    // max-width: 1100px;
    justify-content: center;
`;

// export const Column1 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col1;
// `;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

// export const TextWrapper1 = styled.div`
//     padding-top: 25px;
//     padding-bottom: 100px;
//     align-items: center;
//     max-width: 1100px;
// `;

export const TextWrapper2 = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    // max-width: 1100px;
`;

export const Heading = styled.h1`
    font-size: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

// export const Subtitle1 = styled.p`
//     margin-top: 50px;
//     margin-bottom: 50px;
//     text-align: center;
//     font-size: 12px;
//     line-height: 24px;
//     color: #fff;
// `;

export const Subtitle2 = styled.p`
    max-width: 800px;
    margin-bottom: 25px;
    margin-bottom: 25px;
    text-align: justify;
    font-size: 12px;
    line-height: 24px;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`;

export const RoadmapContainer = styled.div`
    style: 500px;
    height: 950px;
`;

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

// const Roadmap = () => {

//     const items = [{
//         title: "5%",
//         contentTitle: "Artist Drops",
//         contentText: "future art collections launch. Free to mint NFTs by local artists for genesis holders.",
//     }, 
//     {
//         title: "10%",
//         contentTitle: "Artist Drops",
//         contentText: "Launch of 10000 piece collection. Mind-blowing art and tons more traits.",
//     },
//     {
//         title: "20%",
//         contentTitle: "Artist Drops",
//         contentText: "Launch of the member-exclusive CryptoPresis Merch Store, featuring limited edition tee, hooodies and other goodies",
//     },
//     {
//         title: "40%",
//         contentTitle: "Artist Drops",
//         contentText: "CryptoPresis Genesis holders can vote on future use of funds available for social responsibility and post-launch member-exclusive benefits.",
//     },
//     {
//         title: "60%",
//         contentTitle: "Artist Drops",
//         contentText: "Deliver CryptoPresi #1 with tokenID: 1 to the president of El Salvador,Nayib Bukele.",
//     },
//     {
//         title: "80%",
//         contentTitle: "Artist Drops",
//         contentText: "Donate 10% to charitable organizations in El Salvador with the purpose of spreading education in the general cryptocurrency space.",
//     },
//     {
//         title: "100%",
//         contentTitle: "Artist Drops",
//         contentText: "Purchase an estate in the metaverse for member-exclusive parties, events and get-togethers.",
//     },
//     ];

//     return (
//         <RoadmapContainer>
//             <Chrono
//             items={items}
//             mode="TREE"
//             />
//         </RoadmapContainer>
//     );
// };

// export default Roadmap;