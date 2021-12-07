import React, { useState } from 'react';
import { ContactContainer, ContactLabel, ContactInput, ContactForm, ContactTextArea, FormButton } from './ContactElements';

const Contact = () => {
    const [ contactData, setContactData ] = useState({
        email: '',
        subject: '',
    });


    function handle(e) {
        const newData = { ...contactData };
        newData[e.target.id] = e.target.value;
        setContactData(newData);
    }

    function submitHandle(e) {
        const newData = {
            email: '',
            subject: '',
        }
        e.preventDefault();

        setContactData(newData);
    }

    return (
        <ContactContainer>
            <ContactForm>
                <ContactLabel>Your email address</ContactLabel>
                <ContactInput placeholder="Email" type="email" id="email" value={contactData.email} onChange={(e)=>handle(e)}/>
                <ContactLabel>How can we help?</ContactLabel>
                <ContactTextArea id="subject" onChange={(e)=>handle(e)} value={contactData.subject}/>
                <FormButton type="submit" onClick={(e) => submitHandle(e)}>Submit</FormButton>
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact;
