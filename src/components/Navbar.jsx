import React from 'react'
import Home from './Home'
import { Player } from '@lottiefiles/react-lottie-player';
import Booking from './Bookingpage';



const Navbar = () => {
  return (
    <div className='p-5'>
      <section className=' bg-blue-300 rounded-2xl p-9 mb-10'> 
        <div className='container w-full'>
          <div className='flex py-0'>
                <ul className='flex font-bold'>
                  <li className='p-4'>

                <Player
                autoplay={true}
                loop={true}
                controls={true}
                src="https://assets6.lottiefiles.com/packages/lf20_2PMsFKmVCe.json"
                style={{ height: '30px', width: '175px',marginLeft:'-50px',marginTop:'-5px'}}
                ></Player>

                  </li>
                  <li className='-ml-16 text-3xl font-semibold p-2 pr-7 border-r mr-3 border-gray-600'>BlueBus</li>
                  <li className='p-4'>Home</li>
                  <li className='p-4'>About</li>
                  <li className='p-4'>Services</li>
                </ul>
             <button className='ml-auto bg-[#f23939] h-10 rounded-2xl mt-2 px-4 text-white font-bold'>LogOut</button> 
          </div> 
            {<Home/>}
        </div>
      </section>
      <section className=' bg-slate-200 rounded-2xl p-6 w-full h-[43rem]'>
         <Booking/>
      </section>
    </div>
  )
}

export default Navbar
