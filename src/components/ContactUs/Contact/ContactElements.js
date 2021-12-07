import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    height: 800px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ContactLabel = styled.h2`
    font-size: 20px;
    color: #fff;
`;

export const ContactForm = styled.form`
    background: #000;
    height: 70%;
    width: 700px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 10px;
    flex-direction: column;

    @media screen and (max-width: 500px) {
        width: 400px;
    }
`;

export const ContactInput = styled.input`
    width: 350px;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 0.5px;
    border-radius: 10px;
    border-color: #000;
    margin-top: 10px;

    &:focus {
        outline: none;
    }
`;

export const ContactTextArea = styled.textarea`
    width: 500px;
    height: 300px;
    resize: none;
    border-radius: 10px;
    padding: 5px;

    &:focus {
        outline: none;
    }

    @media screen and (max-width: 500px) {
        width: 300px;
    }
`;

export const FormButton = styled.button`
    width: 200px;
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 10px;
    color: #000;
    font-size: 20px;
    cursor: pointer;    
    margin-top: 20px;
    text-decoration: none;

    &:hover {
        background: #fff;
    }
`;