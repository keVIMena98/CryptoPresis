import React, {useState} from 'react';
import { Data } from './data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus} from 'react-icons/fi';
import styled from 'styled-components';

export const FaqContainer = styled.div`
    color: #fff;
    padding: 48px 24px;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 0 24px;
    }
`;

export const FaqRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(3fr, 1fr);
    // max-width: 1100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const FaqWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    max-height: 1600px;
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
`;

export const Wrap = styled.div`
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    // max-width: 1200px;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid #00ffff;
    border-top: 1px solid #00ffff;
    border-left: 1px solid #00ffff;
    border-right: 1px solid #00ffff;

    h1 {
        padding: 2rem;
        font-size: 12px;
    }

    span {
        margin-right: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`;

export const Dropdown = styled.div`
    background: #000;
    color: #fff;
    // max-width: 1200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 12px;
    }

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`

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

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 48px 0;
    padding-right: 0;
`;

const FAQ = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null)
        }
        
        setClicked(index)
    }

    return (
        <IconContext.Provider value={{ color: '#00fff', size: '20px'}}>
            <FaqContainer id="FAQ">
                <FaqWrapper>
                    <TitleContainer>
                        <Heading>FAQ</Heading> 
                    </TitleContainer>
                    <FaqRow>
                        <Column1>
                            <TextWrapper>  
                                {Data.map((item, index) => {
                                    return (
                                        <>
                                        <Wrap onClick={() => toggle(index)} key={index}>
                                            <h1>{item.question}</h1>
                                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                        </Wrap>
                                        {clicked === index ? (
                                            <Dropdown>
                                                <p>{item.answer}</p>
                                            </Dropdown>
                                        ) : null}
                                            
                                        </>
                                    );
                                })}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src= {require('../../assets/images/example.gif')}/>
                            </ImgWrap>
                        </Column2>
                    </FaqRow>
                </FaqWrapper>
            </FaqContainer>
        </IconContext.Provider>
    )
    
 
}

export default FAQ
