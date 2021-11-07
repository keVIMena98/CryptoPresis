import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer'
import { homeObjOne } from '../components/InfoSection/data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <HeroSection />
           <InfoSection {...homeObjOne} />
           <Footer />
        </>
    )
}

export default Home
