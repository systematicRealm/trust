import React from 'react'
import h1 from '../assets/Hayatt/Hayatt (1).jpg'
import h2 from '../assets/Hayatt/Hayatt (2).jpg'
import h3 from '../assets/Hayatt/Hayatt (3).jpg'
import h4 from '../assets/Hayatt/Hayatt (4).jpg'
import h5 from '../assets/Hayatt/Hayatt (5).jpg'

export default function Hayatt() {
  return (
    <div className='flex items-baseline justify-center gap-3'>

      <div className='w-3/4 overflow-hidden rounded-lg shadow bg-slate-50 '>
        <img className='object-cover object-center w-full h-full rounded-lg' src={h1}/>
      </div>

      <div className='w-4/6 overflow-hidden rounded-lg shadow bg-slate-50'>
        <img className='object-cover object-center w-full h-full rounded-lg' src={h2}/>
      </div>

      <div className='w-3/4 overflow-hidden rounded-lg shadow bg-slate-50'>
        <img className='object-cover object-center w-full h-full rounded-lg' src={h3}/>
      </div>

      <div className='w-full overflow-hidden rounded-lg shadow bg-slate-50'>
        <img className='object-cover object-center w-full h-full rounded-lg' src={h4}/>
      </div>

      <div className='overflow-hidden rounded-lg shadow  w-2/2 bg-slate-50'>
        <img className='object-cover object-center w-full h-full rounded-lg' src={h5}/>
      </div>
    </div>
  )
}
