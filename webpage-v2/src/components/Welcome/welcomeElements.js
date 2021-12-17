import styled from 'styled-components';

export const InfoContainer = styled.div `
    color: #fff;
    padding: 48px 24px;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 0 24px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(3fr, 1fr);
    max-width: 1100px;
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
    max-width: 1100px;
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

    @media screen and (max-wdith: 480px) {
        font-size: 12px;
    }
`;

export const Subtitle = styled.p`
    width: 100%;
    // margin-bottom: 35px;
    text-align: justify;
    font-size: 12px;
    line-height: 18px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
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