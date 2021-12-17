import styled from 'styled-components';

export const FaqContainer = styled.div `
    color: #fff;
    padding: 48px 24px;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 48px 24px;
    }
`;

export const FaqRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(3fr, 1fr);
    max-width: 1100px;
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768 px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const FaqWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    max-height: 3000px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center; 
`;

export const TitleContainer = styled.div`
    display: flex;
    padding: 24px 0 24px 0;
    width: 100%;
    max-width: 1100px;
    justify-content: center;
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 60px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 740px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`;

export const Wrap = styled.div`
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
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
    max-width 1200px;
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
        font-size: 12px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 0 0
    padding-right: 0;
`;