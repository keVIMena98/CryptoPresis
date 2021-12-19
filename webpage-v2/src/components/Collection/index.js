import React from 'react';
import { Button } from '../ButtonElements';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper,
    BtnWrap, 
    Heading, 
    Subtitle,
} from './CollectionElements';

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
