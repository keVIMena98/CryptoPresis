import React from 'react';
import Welcome from '../components/Welcome';
import Overview from '../components/Overview';
import { homeObjOne } from '../components/Overview/data';
import Dapp from '../components/MintingDapp';
import InfiniteCollage from '../components/InfiniteCollage';
import Roadmap from '../components/Roadmap';
import Collection from '../components/Collection';
import { homeObjTwo } from '../components/Collection/data';
import Team from '../components/Team';
import FAQ from '../components/Faq';


const HomePage = () => {
    return (
        <>
            <Welcome />
            <Overview {...homeObjOne} />
            <Dapp />
            <InfiniteCollage />
            <Roadmap />
            <Collection {...homeObjTwo} />
            <Team />
            <FAQ />
        </>
    );
};

export default HomePage;
