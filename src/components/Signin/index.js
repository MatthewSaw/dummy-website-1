import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { Container, FormInput, FormLabel, FormWrap, Icon, FormContent, Form, FormH1, FormButton, Text } from './SigninElements';

const SignIn = () => {
    const alert = useAlert();

    const [ loginData, setLoginData ] = useState({
        email: '',
        password: '',
    });

    function handle(e) {
        const newData = { ...loginData };
        newData[e.target.id] = e.target.value;
        setLoginData(newData);

        // console.log(newData);
    }

    function submit(e) {
        e.preventDefault();
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={(e)=> submit(e)}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput onChange={(e) => handle(e)} id="email" value={loginData.email} type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput onChange={(e) => handle(e)} id="password" value={loginData.password} type='password' required />
                            <FormButton type='submit' onClick={() => { alert.show('Submitted')}}>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>  
        </>
    )
}

export default SignIn;
