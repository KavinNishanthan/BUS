import React from 'react'
import bus from '../assets/2560px-Bus.svg.png'
import Card from './Card'

const Home = () => {
  return (
    <div className='flex mt-40 ml-5'>
      <div className='w-1/2'>
          {<Card/>}
      </div>
      <div className='w-1/2 ml-11'>
        <img src={bus} alt=''/>
      </div>
    </div>
  )
}

export default Home


