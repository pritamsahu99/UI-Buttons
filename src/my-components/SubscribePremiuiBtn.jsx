import React from 'react'
import ArrowRightIcon from './ArrowRightIcon'
import ArrowLeftIcon from './ArrowLeftIcon'

const SubscribePremiuiBtn = () => {
  return (
    <div className='h-20 w-56 relative group rounded-3xl px-8 border-2 border-[#E9C46A] border-l-0 duration-300 overflow-hidden flex justify-between items-center cursor-pointer active:translate-y-1'>
        <ArrowLeftIcon/>
        <h1 className='group-hover:text-[#EEEDEB] duration-500 -translate-x-10 group-hover:translate-x-10 z-50  group-hover:tracking-wider delay-100 font-mono'>Subscribe</h1>
        <ArrowRightIcon/>
        <span className="absolute top-0 -right-full duration-500 group-hover:right-0 h-full w-full bg-[#E9C46A]"></span>
    </div>
  )
}

export default SubscribePremiuiBtn