import React, { useState } from 'react'
import InputForm from '@InputForm'

import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const SignIn = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm()
  const [peticionErronea, setPeticionErronea] = useState(false)

  const navigate = useNavigate()
  const [, setAuthCookie] = useCookies(['authToken'])
  const [, setUserIdCookie] = useCookies(['userId'])

  const storeUserData = async userId => {
    await axios
      .get(`https://linkup-5h1y.onrender.com/api/v1/users/${userId}`)
      .then(res => {
        localStorage.setItem('userData', JSON.stringify(res.data.data))
      })
      .catch(error => {
        console.error(error)
      })
  }

  const checkUser = async data => {
    await axios
      .post('https://linkup-5h1y.onrender.com/api/v1/auths/login', data)
      .then(res => {
        setAuthCookie('authToken', res.data.token)
        setUserIdCookie('userId', res.data.user._id)
        setPeticionErronea(false)
        storeUserData(res.data.user._id)

        setTimeout(() => {
          navigate('/home')
        }, 2000)
      })
      .catch(error => {
        console.error(error)
        setPeticionErronea(true)
        setTimeout(() => {
          setPeticionErronea(false)
        }, 5000)
      })
  }

  const onSubmit = data => {
    checkUser(data)
  }

  return (
    <form
      className="flex flex-col justify-center align-center w-full md:mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForm
        name="email"
        register={register}
        type="text"
        placeholder="Email"
        errors={errors}
        margin={'mt-4'}
      />
      <InputForm
        name="password"
        register={register}
        type="password"
        placeholder="Password"
        errors={errors}
        margin={'mt-4'}
      />

      {/* <p className='ml-10 text-xs'>Keep me SIGN IN</p> */}
      <button className="btn btn-lg bg-violet-700 w-2/3 mx-auto my-5 rounded-full text-slate-100 hover-bg-violet-600 max-md:w-1/2 max-sm:w-2/3">
        Sign In
      </button>
      {/* <p className='mx-auto text-xs mt-5'>FORGOT PASSWORD</p> */}

      {peticionErronea && (
        <div className="toast toast-start w-1/3 ">
          <div className="alert alert-error flex max-sm:w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Usuario Incorrecto</span>
          </div>
        </div>
      )}
    </form>
  )
}

export default SignIn
