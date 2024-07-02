import React from 'react'
import OnLineCheckINBtn from './my-components/OnLineCheckINBtn'
import OnLineCheckInBtn2 from './my-components/OnLineCheckInBtn2'
import OnLineCheckInBtn3 from './my-components/OnLineCheckInBtn3'
import OnLineCheckInBtn4 from './my-components/OnLineCheckInBtn4'
import SubscribeFollow from './my-components/SubscribeFollow'

const UIButtons = () => {
  return (
    <div className='relative bg-[#006a6a] h-screen w-full flex justify-center items-end flex-wrap font-gilroy gap-20 py-24'>
    <SubscribeFollow/>
    <OnLineCheckINBtn/>
    <OnLineCheckInBtn2/>
    <OnLineCheckInBtn3/>
    <OnLineCheckInBtn4/>
  </div>  )
}

export default UIButtons