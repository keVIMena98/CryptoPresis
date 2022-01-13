import React, { useState } from 'react';
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
import NavbarS from '../components/NavbarS';
import SidebarS from '../components/SidebarS';
import Footer from '../components/Footer';


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SidebarS isOpen={isOpen} toggle={toggle} />
            <NavbarS toggle={toggle} />
            <Welcome />
            <Overview {...homeObjOne} />
            <Dapp />
            <InfiniteCollage />
            <Roadmap />
            <Collection {...homeObjTwo} />
            <Team />
            <FAQ />
            <Footer />
        </>
    );
};

export default HomePage;
