import React, { useState } from 'react';
import About from '../components/AboutUs/About';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Mission from '../components/Mission';
import Beliefs from '../components/Beliefs';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import Video from '../videos/video-2.mp4';

class AboutUs extends React.Component {

    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen})
    }

    render() {
        const { isOpen } = this.state;

        return (
            <>
                <ScrollToTop />
                <Sidebar isOpen={isOpen} toggle={() => this.toggle()}/>
                <Navbar toggle={() => this.toggle()} navMenu={false} />
                <About video={Video} desc={"Meet The Most Innovative People"}/>
                <Mission />
                <Beliefs />
                <Footer />
            </>
        )
    }
}

export default AboutUs;

