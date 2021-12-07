import React from 'react';
import { BeliefsContainer, BeliefsWrapper, Img, BeliefsTitle, BeliefsDesc } from './BeliefsElements';
import Image from '../../images/beliefs.png';

const Beliefs = () => {
    return (
        <BeliefsContainer>
            <Img src={Image}/>
            <BeliefsWrapper>
                <BeliefsTitle>Everyone Belongs Here</BeliefsTitle>
                <BeliefsDesc>Dolla was founded in 2013 with the belief that we all get ahead when nobody gets left behind.</BeliefsDesc>
            </BeliefsWrapper>
        </BeliefsContainer>
    )
}

export default Beliefs;
