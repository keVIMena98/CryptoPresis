import React, { useState } from 'react'
import NavbarR from '../components/NavbarR';
import SidebarR from '../components/SidebarR';
import DropSection from '../components/Drop';
import { homeObjOne } from '../components/Drop/data';
import DropIntroSection from '../components/DropIntro';
import Footer from '../components/Footer';

const DropPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SidebarR isOpen={isOpen} toggle={toggle} />
            <NavbarR toggle={toggle} />
            <DropIntroSection {...homeObjOne} />
            <DropSection {...homeObjOne} />
            <Footer />
        </>
    );
};

export default DropPage;