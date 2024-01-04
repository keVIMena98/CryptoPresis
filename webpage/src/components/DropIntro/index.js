import React from 'react'
import styled from 'styled-components'
// import { Button } from '../ButtonElements';

export const InfoContainer = styled.div`
    color: #fff;
    padding: 48px 24px;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 0 24px 48px 24px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(5fr, 1fr);
    width: 100%;
    // max-width: 1100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
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

export const TextWrapper = styled.div`
    max-width: 740px;
    padding-top: 0;

    @media screen and (max-width: 768px) {
        padding-bottom: 0;
        max-width: 540px;
        padding: 0 15px;
    }
`;

// export const TopLine = styled.p`
//     color: #00ffff;
//     font-size: 16px;
//     line-height: 16px;
//     font-weight: 700;
//     letter-spacing: 1.4px;
//     text-transform: uppercase;
//     margin-bottom: 16px;
// `;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 18px;
        margin: 24px 0;
        text-align: center;
    }
`;

export const Subtitle = styled.p`
    width: 100%;
    margin-bottom: 12px;
    text-align: justify;
    font-size: 12px;
    line-height: 18px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;

    @media screen and (max-width: 768px) {
        justify-content: center;
        padding: 8px 24px;
    }
`;

const DropIntroSection = ({
    buttonlabel,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <Heading>BITCOIN BACKGROUND BY CRYPTOPRESIS</Heading>
                            <Subtitle>Bitcoin Backgrounds is a specially curated Twitter Background NFT drop.</Subtitle>
                            <Subtitle>Selecting 5 of the top Salvadorean artists to launch their Genesis piece, this collection is available free-to-mint for 5 days exclusively for holders of the CryptoPresis NFT.</Subtitle>
                            <Subtitle>Each of these pieces will grant future utility for their holders and are designed to be used as Twitter backgrounds complementing the CryptoPresis NFT profile pictures.</Subtitle>
                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DropIntroSection
