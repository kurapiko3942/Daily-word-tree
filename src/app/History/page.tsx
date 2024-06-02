import CurrentCard from '@/components/Home/currentCard'
import Hukidashi from '@/components/Home/hukidashi'
import React from 'react'

const History = () => {
  return (
    <div>
    <div>History</div>
    <CurrentCard/>
    <Hukidashi children={true}/>
    </div>
  )
}

export default History