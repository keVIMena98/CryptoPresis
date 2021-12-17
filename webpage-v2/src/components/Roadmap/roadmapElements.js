import styled from 'styled-components';

export const InfoContainer = styled.div `
    color: #fff;
    background: #000;

    @media screen and (max-width: 768px) {
        padding: 48px 24px;
        height: 100%;
        max-height: 3000px;
    }

    @media screen and (max-width: 375px) {
        padding: 48px 24px;
        height: 100%;
        max-height: 6000px;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 10fr);
    width: 100%
    max-width: 1100px;
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 760 px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
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

export const TitleContainer = styled.div`
    display: flex;
    padding: 24px 0 24px 0;
    width: 100%;
    max-width: 1100px;
    justify-content: center;
`;

// export const Column1 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col1;
// `;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

// export const TextWrapper1 = styled.div`
//     padding-top: 25px;
//     padding-bottom: 100px;
//     align-items: center;
//     max-width: 1100px;
// `;

export const TextWrapper2 = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 1100px;
`;

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

// export const Subtitle1 = styled.p`
//     margin-top: 50px;
//     margin-bottom: 50px;
//     text-align: center;
//     font-size: 12px;
//     line-height: 24px;
//     color: #fff;
// `;

export const Subtitle2 = styled.p`
    max-width: 800px;
    margin-bottom: 25px;
    margin-bottom: 25px;
    text-align: justify;
    font-size: 12px;
    line-height: 24px;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 8px;
    }
`;