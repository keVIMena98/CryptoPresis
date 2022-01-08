import React, {useState} from 'react';
import { Button2 } from '../ButtonElements';
import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import herobg from '../../assets/images/herobgdark3.png';
import herobg2 from '../../assets/images/herobgdark4.png';

export const HeroContainer = styled.div`
    background : #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 850px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
        ), lineargradient(180deg, rgba(0,0,0,0.2) 0%, transparent 50%);
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
    
    @media screen and (max-width: 480px) {
        height: 650px;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${herobg});

    @media screen and (max-width: 768px) {
        background-image: url(${herobg2});
    }
`;

export const HeroContent = styled.div`
    z-index: 3;
    width: 100%
    max-width: 1200px;
    margin-bottom: 200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 300px;
        margin-bottom: 100px;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 24px;
    font-style: italic;
    text-align: center;
    max-width: 800px;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

const Welcome = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg />
                {/* <VideoBg src={Image} type='herobg/png'/> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>INVEST ON A LIMITED EDITION CRYPTOPRESIS</HeroH1>
                <HeroP>
                    Be part of the select few who get their hands on these limited edition art pieces. Own part of history.
                </HeroP>
                <HeroBtnWrapper>
                    <Button2 
                        to='Mint' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true} duration={500} spy={true} exact='true' offset={-100}
                    >
                        Buy {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button2>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Welcome