import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Form, redirect, Link } from 'react-router-dom'
import { FormRow, Logo, SubmitBtn } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/register', data)
    toast.success('Registration Successful')
    return redirect('/signin')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' />
        <FormRow
          type='text'
          name='lastName'
          labelText='Last Name'
          defaultValue=''
        />
        <FormRow type='text' name='location' />
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <p>
          Already a member?
          <Link to='/signin' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register
