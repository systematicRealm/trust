import React from 'react'
import bgImg from './assets/bgImage.jpg'

export default function Intro() {
  return (
    <div className='relative flex bg-neutral-600 w-100 h-100v'>
      <img className='object-cover object-center w-full' src={bgImg} />
    </div>
  )
}
