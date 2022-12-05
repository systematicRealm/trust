import React from 'react'
import Hayatt from './components/Hayatt'
import KGL from './components/KGL'

export default function OurProjects() {
  return (
    <div className='flex items-center justify-center w-full h-200v bg-neutral-100'>
    <div className='flex flex-col w-3/4 gap-3 bg-slate-200'>
      <Hayatt />
      <KGL />
    </div>
    </div>
  )
}
