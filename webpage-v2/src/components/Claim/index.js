import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    padding: 48px 24px;
    background: ${({LightBg}) => (LightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 0 24px 48px 24px;
    }
`;

export const Wrapper = styled.iframe`
    max-width: 1000px;
    display: grid;
    z-index: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center; 
`;

const MintSection = () => {
    return (
        <>
            <Container>
                <Wrapper
                    src="https://cloudflare-ipfs.com/ipfs/bafybeihz5jer6ad75ku3dh6mj4rlufrtiydv5mkoqurm55nv2uckmfiuya?contract=0xB7D67be516E80f05259CDdb9efA3523F72E2F912&chainId=137&tokenId=0"
                    width="100%"
                    height="600px"
                    frameborder="0"
                ></Wrapper>
            </Container>  
        </>
    )
}

export default MintSection;
