import React from 'react'
import FormInput from '../components/FormInput'
import Form from '../components/Form'

export default function Signup() {
  return (
    <Form name={"Sign Up"} children={
      <>
        <FormInput name={'Username'} type={"text"} />
        <FormInput name={'Phone'} type={"text"} />
        <FormInput name={'Address'} type={"text"} />
        <FormInput name={'Email'} type={"email"} />
        <FormInput name={'Password'} type={"password"} />
        <FormInput name={'Re-Password'} type={"password"} />
      </>
      } 
    />
  )
}
