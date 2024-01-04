import React from 'react';
import styled from "styled-components";
import collage from "../../assets/images/collage.png";

export const CollageContainer = styled.div`
    padding: 48px 0;
    background: #000;
`;

export const CollageWrapper = styled.div`
    height: 300px;
    background-image: url(${collage});
    animation: animatedBackground 100s linear infinite;
    
    @keyframes animatedBackground {
        from { background-position: 0 0 }
        to { background-position: -1875px 0 }
     }
`;

const CollageSection = () => {
    return (
        <CollageContainer>
            <CollageWrapper></CollageWrapper>
        </CollageContainer>
    )
}

export default CollageSection;