import React, {useState} from 'react';
import Video from '../../videos/video4.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video4/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to Simlabs</HeroH1>
                <HeroP>
                    We are a team of Latin American developers and artists bringing innovation to 
                    the Cryptocurrency space in El Salvador. Inspired by the legalization of 
                    Bitcoin as legal tender in the country, The next step forward is bringing 
                    Non-Fungible Tokens to the mainstream in Latin America.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='about' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                    >
                        About Us {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
