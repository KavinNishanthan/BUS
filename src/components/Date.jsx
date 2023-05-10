import React,{useState} from 'react'

const Date = () => {

    const [Date,setDate]= useState();

  return (
    <div className='flex mt-5 px-16'>
      <h6 className='mt-4 font-serif'>Date OF Departur :</h6>  
      <input type='date' className='px-2 ml-6 rounded-lg h-11 w-36 bg-gray-300 mt-2 focus:border
        blue-500 foucs:bg-gray-600 focus:outline-offset-0' onChange={e=>setDate(e.target.value)} value={Date}/>
    </div>
  )
}

export default Date

