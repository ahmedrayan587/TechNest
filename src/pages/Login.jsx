import React from "react";
import FormInput from '../components/FormInput'
import FormCheckBox from '../components/FormCheckBox'
import Form from '../components/Form'

export default function Login() {
  return (
    <Form name={"Log In"} children={
      <>
          <FormInput name={'Email'} type={"email"} />
          <FormInput name={'Password'} type={"password"} />
          <FormCheckBox id={"remember"} name={"Remember Me"} />
      </>
      } 
    />
  );
}