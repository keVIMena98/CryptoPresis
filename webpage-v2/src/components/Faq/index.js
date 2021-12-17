import React, {useState} from 'react';
import { Data } from './data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus} from 'react-icons/fi';
import {
    FaqContainer,
    FaqWrapper,
    FaqRow,
    TitleContainer,
    Dropdown,
    Wrap,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    ImgWrap,
    Img
} from './FaqElements';

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
