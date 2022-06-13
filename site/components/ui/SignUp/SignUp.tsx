import React, { FC } from 'react'
import s from './Hero.module.css'
import Link from 'next/link'

const SignUp: FC = () => {
  return (
    <div className="flex flex-col justify-center mt-[7rem] mb-[7rem] pl-6 pr-6">
      <h2 className="text-center font-medium text-3xl">
        Sign up TATRA HILLS emails
      </h2>
      <div className="flex flex-col md:flex-row justify-center mt-[2rem]">
        <input
          type="email"
          className="py-2 h-[3rem] md:h-[auto] bg-[transparent] outline-none px-[1rem] border border-[#C9C9C9] w-full md:w-[22rem]"
          placeholder="Enter your email address"
        />
        <button className="uppercase text-[#FFFFFF] bg-[#70877B] h-[3rem] md:h-[auto] px-6 py-2 text-2xl w-[fit-content] text-center font-medium m-auto md:m-0 mt-10 md:mt-0">
          sign me up!
        </button>
      </div>
    </div>
  )
}

export default SignUp
