import styled from 'styled-components';

export const MissionContainer = styled.div`
    background: #000;
    height: 400px;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const MissionTitle = styled.h1`
    font-size: 50px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const MissionDesc = styled.p`
    color: #fff;
    font-size: 25px;
    text-align: center;
    max-width: 80%;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;