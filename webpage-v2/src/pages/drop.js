import React from 'react'
import DropSection from '../components/Drop';
import { homeObjOne } from '../components/Drop/data';
import DropIntroSection from '../components/DropIntro';

const DropPage = () => {
    return (
        <>
            <DropIntroSection {...homeObjOne} />
            <DropSection {...homeObjOne} />
        </>
    );
};

export default DropPage;