import React from 'react'
import img1 from '../assets/imgs/img (5).webp'
import img2 from '../assets/imgs/img (4).webp'


export default function UMU() {
  return (
    <div className='flex items-start justify-center flex-1 gap-3'>

      <div className='overflow-hidden rounded-lg shadow  bg-slate-50'>
        <img className='object-cover object-center rounded-lg' src={img2}/>
      </div>

      <div className='overflow-hidden rounded-lg shadow  bg-slate-50'>
        <img className='object-cover object-center rounded-lg' src={img1}/>
      </div>

    </div>
  )
}
