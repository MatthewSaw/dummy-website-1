import React from 'react';
import { AboutContainer, VideoBg, AboutBg, AboutContent, AboutH1 } from './AboutElements';

const About = ({ video, desc }) => {
    return (
        <AboutContainer>
            <AboutBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' />
            </AboutBg>
            <AboutContent>
                <AboutH1>{desc}</AboutH1>
            </AboutContent>
        </AboutContainer>
    )
}

export default About;
