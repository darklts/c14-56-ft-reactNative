import React, { useState } from 'react'

import icon from '@logo'
import './Bienvenida.css'

import SignIn from '../Formulario/SignIn'
import SignUp from '../Formulario/SignUp'

const Bienvenida = () => {
  const [mostrarForm, setMostrarForm] = useState(true)

  const formulario = () => {
    return (
      <div className="transition-opacity duration-500 text-white">
        {mostrarForm ? <SignIn /> : <SignUp />}
      </div>
    )
  }

  //sm:w-11/12 md:w-2/3 lg:w-11/12 xl:w-2/3
  // bg-slate-100

  return (
    <div className="min-h-screen gradiente flex items-center justify-center ">
      <div className="max-sm:flex-col h-full max-md:h-full max-sm:my-5 my-10 mitad bg-black w-11/12 rounded-xl flex max-md:flex-col">
        <div className="sm:flex-row max-sm:w-2/3 flex md:w-2/3">
          <div className=" flex min-md:flex-row flex-col max-sm:w-full text-white sm:w-1/2 sm:ml-16  md:mt-10 ">
            <img
              src={icon}
              alt="icon"
              className="max-sm:w-auto sm:w-2/5 max-sm:w-2/5 max-sm:object-fit"
            />
            <div className="text-center">
              <p className="sm:text-5xl my-3 text-3xl  font-medium">
                Bienvenidos!
              </p>
              <div className="sm:h-2 max-sm:hidden divider bg-amber-200 rounded max-md:my-2 my-10" />
              <p className="max-sm:hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                obcaecati veniam nemo hic fuga nisi nam eum distinctio unde.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex-col md:w-1/4 ${
            mostrarForm ? 'my-auto' : 'my-2'
          }  lg:mr-10 rounded-xl w-4/6 max-sm:my-3 loginStyles h-full`}
        >
          <div className="w-full flex justify-around mt-1">
            <button
              className="btn btn-outline text-slate-100 hover:text-amber-200 hover:bg-transparent focus:text-amber-200 w-2/5"
              style={{
                border: '0',
                borderBottom: '2px solid',
                borderRadius: '0',
              }}
              onClick={() => setMostrarForm(true)}
            >
              sign in
            </button>
            <button
              className="btn btn-outline text-slate-100 hover:text-amber-200 hover:bg-transparent focus:text-amber-200 w-2/5"
              style={{
                border: '0',
                borderBottom: '2px solid',
                borderRadius: '0',
              }}
              onClick={() => setMostrarForm(false)}
            >
              sign up
            </button>
          </div>
          <div className="transition-opacity duration-500 flex flex-col text-slate-100">
            {formulario()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bienvenida
