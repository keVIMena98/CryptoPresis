import styled from 'styled-components';

export const TeamContainer = styled.div`
    height: 100%;
    max-height: 3000px;
    display: flex;
    flex-direction: column;
    jusify-content: center;
    align-items: center;
    background: #000;
    padding: 48px 24px;


    @media screen and (max-width: 768px) {
        height: 100%;
        max-height: 1500px;
        padding: 48px 24px;
    }

    @media screen and (max-width: 480px) {
        height: 100%;
        max-height: 5000px;
        padding: 48px 24px;
    }
`

export const TeamWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 15px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const TeamCard = styled.div`
    background: #000;
    border: 4px dashed #00FFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 450px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const TeamProfile = styled.img`
    height: 300px;
    width: 300px;
    margin-bottom: 10px;
`

export const TeamH1 = styled.h1`
    padding: 24px 0 24px 0;
    font-size: 24px;
    font-style: italic;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;

    @media screen and (max-wdith: 480px) {
        font-size: 12px;
    }
`

export const TeamH2 = styled.h2`
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 10px;
`

export const TeamH3 = styled.h3`
    font-size: 0.8rem;
    color: #ffffff;
    margin-bottom: 10px;
`

export const TeamP = styled.p`
    font-size: 0.7rem;
    color: #ffffff;
    text-align: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 20px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #00ffff;
    }
`