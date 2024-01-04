import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Button = styled.a`
    border-radius: 5px;
    background: ${({ primary }) => (primary ? '#00ffff' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '16px' : '12px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transitions: all 0.2s ease-in-out;
        background : ${({ primary }) => (primary ? '#fff' : '#00ffff')};
    }
`;

export const Button2 = styled(LinkS)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#00ffff' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '16px' : '12px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transitions: all 0.2s ease-in-out;
        background : ${({ primary }) => (primary ? '#fff' : '#00ffff')};
    }
`;

export const Button3 = styled(LinkR)`
    border-radius: 5px;
    background: ${({ primary }) => (primary ? '#00ffff' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '16px' : '12px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transitions: all 0.2s ease-in-out;
        background : ${({ primary }) => (primary ? '#fff' : '#00ffff')};
    }
`;