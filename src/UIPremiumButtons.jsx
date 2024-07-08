import React from 'react'
import SbscribeFollow2 from './my-components/SbscribeFollow2'
import SubscribePremiuiBtn from './my-components/SubscribePremiuiBtn'
import ExploreCollectionBtn from './my-components/ExploreCollectionBtn'

const UIPremiumButtons = () => {
  return (
    <div className='h-screen w-full bg-[#dcdcdc] relative flex md:flex-row flex-col items-center justify-end md:justify-center md:pb-36 md:items-end pb-20 gap-10'>
      <SbscribeFollow2/>
      <SubscribePremiuiBtn/>
      <ExploreCollectionBtn/>
    </div>
  )
}

export default UIPremiumButtons