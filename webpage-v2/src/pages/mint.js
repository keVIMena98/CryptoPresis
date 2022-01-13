import React, { useState } from 'react'
import MintSection from '../components/Claim'
import NavbarR from '../components/NavbarR';
import SidebarR from '../components/SidebarR';
import Footer from '../components/Footer';

const MintPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SidebarR isOpen={isOpen} toggle={toggle} />
            <NavbarR toggle={toggle} />
            <MintSection />
            <Footer />
        </>
    )
}

export default MintPage;
