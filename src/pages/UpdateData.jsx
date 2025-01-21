import React from 'react'
import FormInput from '../components/FormInput'
import FormCheckBox from '../components/FormCheckBox'
import Form from '../components/Form'

export default function UpdateData() {
  return (
    <Form name={"Update Data"} children={
    <>
        <FormInput name={'Username'} type={"text"} />
        <FormInput name={'Phone'} type={"text"} />
        <FormInput name={'Address'} type={"text"} />
        <FormInput name={'Email'} type={"email"} />
        <FormInput name={'Password'} type={"password"} />
    </>
    } />
  )
}
