'use client'
import { motion } from 'motion/react'
import React from 'react'
type Props = {}

export const Header = (props: Props) => {
  return (
    <header>
      <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
        <div className="hidden  rounded-b-lg sm:col-span-2 sm:block justify-items-end
">
          <p >Logo</p>
        </div>
       
        <div className=" rounded-b-lg sm:col-span-8">
          <ul className=' flex gap-3 align-baseline justify-center'>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
            <li>Contact</li>

          </ul>
        </div>
        <div className="hidden rounded-b-lg sm:col-span-2 sm:block"></div>
      </div>
    </header>
  )
}