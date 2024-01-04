import React from 'react';
import { Button } from '../ButtonElements';
import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    padding: 48px 24px;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 48px 24px;
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

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 740px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 0;
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
    margin-top: 48px;
    margin-bottom: 24px;
    font-size: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 18px;
        margin: 24px 0;
        text-align: center;
    }
`;

export const Subtitle = styled.p`
    width: 100%;
    // margin-bottom: 35px;
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
    justify-content: flex-start;
    padding: 12px;

    @media screen and (max-width: 768px) {
        justify-content: center;
        padding: 8px 24px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 0 0;
    padding-right: 0;
`;

const Collection = ({
    lightBg,
    id, 
    imgStart, 
    // topline, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonlabel,
    buttonlabel2,
    // img, 
    // alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <BtnWrap>
                                <Button href='//rarible.com/cryptopresisofficial' target="_blank"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonlabel}</Button>
                            </BtnWrap>
                            <BtnWrap>
                                <Button href='//mintable.app/store/CryptoPresis-Sim-Labs-LLC/0x3ee15e0b8d236f7741ca5c1259fbcf1544e51621' target="_blank"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonlabel2}</Button>
                            </BtnWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Collection;
