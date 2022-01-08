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
                    src="https://cloudflare-ipfs.com/ipfs/bafybeibw2xn3tas5nobkrhdxszdbpkaa7pyov2vjoe5bmcdhj64vs2bwfu?contract=0xB72A3Bf2f89aF3c4845994E8DB364e377156672E&chainId=4&tokenId=0"
                    width="100%"
                    height="600px"
                    frameborder="0"
                ></Wrapper>
            </Container>  
        </>
    )
}

export default MintSection;
