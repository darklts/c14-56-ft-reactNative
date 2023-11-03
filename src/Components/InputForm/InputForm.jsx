import React from 'react'
import ErrorType from '@FormError'

const InputForm = ({ name, register, type, placeholder, errors, margin }) => (
  <div className="flex flex-col justify-center">
    {errors[name] && (
      <div
        className="tooltip tooltip-open tooltip-left tooltip-error "
        data-tip={ErrorType(errors[name]?.type)}
      />
    )}
    <input
      type={type}
      className={`input focus:outline-none w-4/5 max-w-xs bg-transparent  border-b-4 border-amber-200 rounded-none border-l-0 border-r-0 border-t-0 placeholder-slate-100 mx-auto ${margin}`}
      placeholder={placeholder}
      name={name}
      {...register(name, { required: true, minLength: 7, maxLength: 25 })}
    />
  </div>
)

export default InputForm
