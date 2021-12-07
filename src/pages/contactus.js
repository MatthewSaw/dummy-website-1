import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/AboutUs/About';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Contact from '../components/ContactUs/Contact';
import Footer from '../components/Footer';

import Video from '../videos/video-3.mp4';

const ContactUs = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} navMenu={false} />
            <Header video={Video} desc={"Contact Us"}/>
            <Contact />
            <Footer />
        </>
    )
}

export default ContactUs;
