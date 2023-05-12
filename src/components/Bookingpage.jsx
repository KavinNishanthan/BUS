import { Player } from '@lottiefiles/react-lottie-player';
import {GiSteeringWheel} from 'react-icons/gi';
import {TbArmchair} from 'react-icons/tb';
import { useState } from 'react';

const Booking = () => {

    const [selectSeat,setSeat] = useState(false);
    const [busId, setBusId] = useState(null);

    const showChange = (busId)=>{
        console.log(busId)
        setBusId(busId);
        setSeat(!selectSeat);
    }

    const data = [
        {id:1,BusFrom:"Mumbai",BusTo:"Chennai",
        BusName:"Parveen Travels",
        BusType:"Scania A/C Semi Sleeper (2+2)",
        BusRatings:"400 Ratings",
        BusFtinme:"11:00",
        BusTtinme:"6:00",
        BusFee:999,
        seat:[
        {id:1,col:'black',flag:0},
        {id:2,col:'gray',flag:0},
        {id:3,col:'black',flag:0},
        {id:4,col:'black',flag:0},
        {id:5,col:'black',flag:0},
        {id:6,col:'black',flag:0},
        {id:7,col:'black',flag:0},
        {id:8,col:'black',flag:0},
        {id:9,col:'black',flag:0},
        {id:10,col:'pink',flag:0},
        {id:11,col:'black',flag:0},
        {id:12,col:'black',flag:0},
        {id:13,col:'black',flag:0},
        {id:14,col:'black',flag:0},
        {id:15,col:'black',flag:0},
        {id:16,col:'black',flag:0},
        {id:17,col:'black',flag:0},
        {id:18,col:'black',flag:0},
        {id:19,col:'black',flag:0},
        {id:20,col:'black',flag:0},
        {id:21,col:'black',flag:0},
        {id:22,col:'black',flag:0},
        {id:23,col:'black',flag:0},
        {id:24,col:'black',flag:0},
        {id:25,col:'black',flag:0},
        {id:26,col:'black',flag:0},
        {id:27,col:'black',flag:0},
        {id:28,col:'black',flag:0},
        {id:29,col:'black',flag:0},
        {id:30,col:'black',flag:0},
        {id:31,col:'black',flag:0},
        {id:32,col:'black',flag:0},
        {id:33,col:'black',flag:0},
        {id:34,col:'black',flag:0},
        {id:35,col:'black',flag:0},
        {id:36,col:'black',flag:0}
    ]
       },
       {id:2,BusFrom:"Mumbai",BusTo:"Chennai",
        BusName:"Komban Travels",
        BusType:"Volvo Multi-Axle A/C Semi Sleeper (2+2)",
        BusRatings:"400 Ratings",
        BusFtinme:"9:30",
        BusTtinme:"4:30",
        BusFee:1200,
        seat:[
            {id:1,col:'black',flag:0},
            {id:2,col:'gray',flag:0},
            {id:3,col:'black',flag:0},
            {id:4,col:'black',flag:0},
            {id:5,col:'black',flag:0},
            {id:6,col:'black',flag:0},
            {id:7,col:'black',flag:0},
            {id:8,col:'black',flag:0},
            {id:9,col:'black',flag:0},
            {id:10,col:'pink',flag:0},
            {id:11,col:'black',flag:0},
            {id:12,col:'black',flag:0},
            {id:13,col:'black',flag:0},
            {id:14,col:'black',flag:0},
            {id:15,col:'black',flag:0},
            {id:16,col:'black',flag:0},
            {id:17,col:'black',flag:0},
            {id:18,col:'black',flag:0},
            {id:19,col:'black',flag:0},
            {id:20,col:'black',flag:0},
            {id:21,col:'black',flag:0},
            {id:22,col:'black',flag:0},
            {id:23,col:'black',flag:0},
            {id:24,col:'black',flag:0},
            {id:25,col:'black',flag:0},
            {id:26,col:'black',flag:0},
            {id:27,col:'black',flag:0},
            {id:28,col:'black',flag:0},
            {id:29,col:'black',flag:0},
            {id:30,col:'black',flag:0},
            {id:31,col:'black',flag:0},
            {id:32,col:'black',flag:0},
            {id:33,col:'black',flag:0},
            {id:34,col:'black',flag:0},
            {id:35,col:'black',flag:0},
            {id:36,col:'black',flag:0}
        ]
       },
       {id:3,BusFrom:"Mumbai",BusTo:"Chennai",
        BusName:"KPN Travels",
        BusType:"Bharat Benz A/C Semi Sleeper (2+2)",
        BusRatings:"400 Ratings",
        BusFtinme:"8:30",
        BusTtinme:"3:45",
        BusFee:1099,
        seat:[
            {id:1,col:'black',flag:0},
            {id:2,col:'gray',flag:0},
            {id:3,col:'black',flag:0},
            {id:4,col:'black',flag:0},
            {id:5,col:'black',flag:0},
            {id:6,col:'black',flag:0},
            {id:7,col:'black',flag:0},
            {id:8,col:'black',flag:0},
            {id:9,col:'black',flag:0},
            {id:10,col:'pink',flag:0},
            {id:11,col:'black',flag:0},
            {id:12,col:'black',flag:0},
            {id:13,col:'black',flag:0},
            {id:14,col:'black',flag:0},
            {id:15,col:'black',flag:0},
            {id:16,col:'black',flag:0},
            {id:17,col:'black',flag:0},
            {id:18,col:'black',flag:0},
            {id:19,col:'black',flag:0},
            {id:20,col:'black',flag:0},
            {id:21,col:'black',flag:0},
            {id:22,col:'black',flag:0},
            {id:23,col:'black',flag:0},
            {id:24,col:'black',flag:0},
            {id:25,col:'black',flag:0},
            {id:26,col:'black',flag:0},
            {id:27,col:'black',flag:0},
            {id:28,col:'black',flag:0},
            {id:29,col:'black',flag:0},
            {id:30,col:'black',flag:0},
            {id:31,col:'black',flag:0},
            {id:32,col:'black',flag:0},
            {id:33,col:'black',flag:0},
            {id:34,col:'black',flag:0},
            {id:35,col:'black',flag:0},
            {id:36,col:'black',flag:0}
        ]
       },
       {id:4,BusFrom:"Mumbai",BusTo:"Chennai",
        BusName:"SKS Travels",
        BusType:"Volvo A/C B11R Multi Axle Semi Sleeper (2+2)",
        BusRatings:"400 Ratings",
        BusFtinme:"11:50",
        BusTtinme:"8:30",
        BusFee:899,
        seat:[
            {id:1,col:'black',flag:0},
            {id:2,col:'gray',flag:0},
            {id:3,col:'black',flag:0},
            {id:4,col:'black',flag:0},
            {id:5,col:'black',flag:0},
            {id:6,col:'black',flag:0},
            {id:7,col:'black',flag:0},
            {id:8,col:'black',flag:0},
            {id:9,col:'black',flag:0},
            {id:10,col:'pink',flag:0},
            {id:11,col:'black',flag:0},
            {id:12,col:'black',flag:0},
            {id:13,col:'black',flag:0},
            {id:14,col:'black',flag:0},
            {id:15,col:'black',flag:0},
            {id:16,col:'black',flag:0},
            {id:17,col:'black',flag:0},
            {id:18,col:'black',flag:0},
            {id:19,col:'black',flag:0},
            {id:20,col:'black',flag:0},
            {id:21,col:'black',flag:0},
            {id:22,col:'black',flag:0},
            {id:23,col:'black',flag:0},
            {id:24,col:'black',flag:0},
            {id:25,col:'black',flag:0},
            {id:26,col:'black',flag:0},
            {id:27,col:'black',flag:0},
            {id:28,col:'black',flag:0},
            {id:29,col:'black',flag:0},
            {id:30,col:'black',flag:0},
            {id:31,col:'black',flag:0},
            {id:32,col:'black',flag:0},
            {id:33,col:'black',flag:0},
            {id:34,col:'black',flag:0},
            {id:35,col:'black',flag:0},
            {id:36,col:'black',flag:0}
        ]
       },
    ]


    const [{seat}] = data;
    
    const [clickSeat,setColor]=useState(seat);

    const colchg = (key) => {
        const updatedClickSeat = clickSeat.map((value) => {

          if (key === value.id) {
            if (value.col === "black") {
              return { ...value, col: "blue" };
            }
            if(value.col === "blue" ){
                return {...value, col: "black"};
            }
          }
          return value;
        });
      
        setColor(updatedClickSeat);
      };
      


    const values = data.map((values,index)=>{
            

        return(
            <div className="container mt-4 bg-white rounded-lg shadow p-4">

            <div className="p-4 w-full">

                <div className="flex">
             
                    <div className="w-1/3 container ">
                        
                        <p className="text-xl" key={index}>{values.BusName}</p>
                    </div>

                    <div className="w-1/3 flex">
                        <label className='block'>
                        <p className="text-xl ml-[5.5rem]">{values.BusFtinme}</p>
                        <span class="block text-sm font-medium text-slate-500 ml-[5.5rem]">{values.BusFrom}</span>
                        </label>

                    <p>
                    <Player
                        autoplay={true}
                        loop={true}
                        controls={true}
                        src="https://assets4.lottiefiles.com/packages/lf20_Z1UKyUn7Kv.json"
                        style={{ height: '100px',width:'50px', marginLeft:'20px',marginTop:'-35px'}}
                        ></Player>
                    </p>    
                    <label className='block'>
                    <p className="text-xl ml-[1.5rem]">{values.BusTtinme}
                    <Player
                        autoplay={true}
                        loop={true}
                        controls={true}
                        src="https://assets7.lottiefiles.com/temp/lf20_7Qkvy7.json"
                        style={{ height: '150px',width:'150px', marginLeft:'0px',marginTop:'-90px'}}
                        ></Player>
                    </p>
                    <span class="block text-sm font-medium text-slate-500 ml-[1.5rem] -mt-[3.8rem]">{values.BusTo}</span>
                    </label>

                    </div>

                    <div className="w-1/3 flex -mt-5">

                        <div className="w-1/2">
                        <ul className="flex">
                            <li>

                                 <Player
                                autoplay={true}
                                loop={true}
                                controls={true}
                                src="https://assets7.lottiefiles.com/private_files/lf30_y4c7izgv.json"
                                style={{ height: '100px',width:'100px', marginLeft:'',marginTop:'-10px'}}
                                ></Player>

                            </li>

                            <li className="mt-7 text-2xl">
                            {values.BusFee}
                            </li>
                        </ul>
                        
                          
                        </div>
                        <div className="w-1/2 text-zinc-400 mt-5">

                            <ul>
                                <li className="text-center">18 window seats</li>
                                <li className="text-center">Total 36 seats</li>
                            </ul>

                        </div>

                    </div>

                </div>
                <p className=" text-sm text-zinc-400 mb-2">{"Volvo Multi-Axle A/C Semi Sleeper (2+2)"}</p>
                <div className="flex">
                    
                <div className="container text-xs w-9 h-[1.3rem] p-1 rounded-sm bg-green-600 text-white mt-[0.35rem]">
                     4.5/5
                </div>

                <p className="border-r ml-3 h-8 mr-3 border-gray-700"></p>
                <p className=" text-xs text-zinc-400 mt-2">{values.BusRatings}</p>

                </div>

            <div className="flex mt-3">

                <div className="w-1/2 ">
                <p>
                <ul className="flex text-xs">
                    <li>

                    <Player
                    autoplay={true}
                    loop={true}
                    controls={true}
                    src="https://assets3.lottiefiles.com/packages/lf20_yEtvMgerwc.json"
                    style={{ height: '15px',width:'15px', marginLeft:'0px',marginTop:'13px'}}
                    ></Player>

                    </li>

                    <li className="ml-2 mt-[0.8rem]">People choice for</li>
                    <li className="ml-1 mt-[0.2rem] text-xl">.</li>
                    <li className="ml-1 mt-[0.8rem]">Comfortable Seats</li>
                    <li className="ml-1 mt-[0.2rem] text-xl">.</li>
                    <li className="ml-1 mt-[0.8rem]">On Time</li>
                    <li className="ml-1 mt-[0.2rem] text-xl">.</li>
                    <li className="ml-1 mt-[0.8rem]">Courteous Staff</li>
                    <li className="ml-1 mt-[0.2rem] text-xl">.</li>
                    <li className="ml-1 mt-[0.8rem]">Clean Bus</li>
                </ul>
                </p>
                </div>
                <div className="w-1/2">

                <button className='bg-[#23cf95] w-36 ml-[23rem] -mt-5 h-10 rounded-xl p-2 text-white font-bold' onClick={()=>{showChange(values.id)}}>
                    {selectSeat && busId === values.id ? "Hide Seat" : "Select Seat"}
                </button> 
                </div>

             </div>   


            </div>

            <hr class="w-[35rem] h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-300"/>

            <div className= { selectSeat && busId === values.id ? 'h-[20.8rem] flex' : 'hidden'} >
            
                <div className='w-1/2 p-2 flex'>

                    <div className='w-1/2'>
                        <div className='ml-16'>
                            <ul>
                                
                                <li className='flex mb-4 mt-24'>{<TbArmchair size={25} color='gray'/>}Booked</li>
                                <li className='flex mb-4'>{<TbArmchair size={25}/>}Available</li>
                                <li className='flex mb-4'>{<TbArmchair size={25} color='pink'/>}Ladies</li>
                                <li className='flex '>{<TbArmchair size={25} color='blue'/>}Selected</li>
                            </ul>
                        </div>
                    </div>

                    <div className='rounded-xl border border-black w-1/2 p-6'>
                        <div className='ml-36 -mt-1 mb-1'>
                        {<GiSteeringWheel size={25}/>}
                      
                        </div>
                        <hr/>
                       <div className='flex'>
                        
                        
                       <div className='w-1/2 flex h-64 p-6'>

                            <div className='ml-3 flex'>

                            <div className='w-1/2 -mt-3'>

                                {<TbArmchair size={25} key={1} color={clickSeat[0].col} onClick={()=>colchg(1)}/>} 
                                {<TbArmchair size={25} key={2} color={clickSeat[1].col} onClick={()=>colchg(2)}/>} 
                                {<TbArmchair size={25} key={3} color={clickSeat[2].col} onClick={()=>colchg(3)}/>} 
                                {<TbArmchair size={25} key={4} color={clickSeat[3].col} onClick={()=>colchg(4)}/>} 
                                {<TbArmchair size={25} key={5} color={clickSeat[4].col} onClick={()=>colchg(5)}/>} 
                                {<TbArmchair size={25} key={6} color={clickSeat[5].col} onClick={()=>colchg(6)}/>} 
                                {<TbArmchair size={25} key={7} color={clickSeat[6].col} onClick={()=>colchg(7)}/>} 
                                {<TbArmchair size={25} key={8} color={clickSeat[7].col} onClick={()=>colchg(8)}/>} 
                                {<TbArmchair size={25} key={9} color={clickSeat[8].col} onClick={()=>colchg(9)}/>} 

                            </div>
                            <div className='w-1/2 -mt-3'>

                                {<TbArmchair size={25} key={10} color={clickSeat[9].col} onClick={()=>colchg(10)}/>} 
                                {<TbArmchair size={25} key={11} color={clickSeat[10].col} onClick={()=>colchg(11)}/>} 
                                {<TbArmchair size={25} key={12} color={clickSeat[11].col} onClick={()=>colchg(12)}/>} 
                                {<TbArmchair size={25} key={13} color={clickSeat[12].col} onClick={()=>colchg(13)}/>} 
                                {<TbArmchair size={25} key={14} color={clickSeat[13].col} onClick={()=>colchg(14)}/>} 
                                {<TbArmchair size={25} key={15} color={clickSeat[14].col} onClick={()=>colchg(15)}/>} 
                                {<TbArmchair size={25} key={16} color={clickSeat[15].col} onClick={()=>colchg(16)}/>} 
                                {<TbArmchair size={25} key={17} color={clickSeat[16].col} onClick={()=>colchg(17)}/>} 
                                {<TbArmchair size={25} key={18} color={clickSeat[17].col} onClick={()=>colchg(18)}/>}

                            </div>

                            </div>
                        
                        </div>

                        <div className='w-1/2 h-64 flex p-6'>

                        <div className='-ml-3 flex'>

                            <div className='w-1/2 -mt-3'>

                              {<TbArmchair size={25} key={19} color={clickSeat[18].col} onClick={()=>colchg(19)}/>} 
                              {<TbArmchair size={25} key={20} color={clickSeat[19].col} onClick={()=>colchg(20)}/>} 
                              {<TbArmchair size={25} key={21} color={clickSeat[20].col} onClick={()=>colchg(21)}/>} 
                              {<TbArmchair size={25} key={22} color={clickSeat[21].col} onClick={()=>colchg(22)}/>} 
                              {<TbArmchair size={25} key={23} color={clickSeat[22].col} onClick={()=>colchg(23)}/>} 
                              {<TbArmchair size={25} key={24} color={clickSeat[23].col} onClick={()=>colchg(24)}/>} 
                              {<TbArmchair size={25} key={25} color={clickSeat[24].col} onClick={()=>colchg(25)}/>} 
                              {<TbArmchair size={25} key={26} color={clickSeat[25].col} onClick={()=>colchg(26)}/>} 
                              {<TbArmchair size={25} key={27} color={clickSeat[26].col} onClick={()=>colchg(27)}/>} 

                            </div>
                            <div className='w-1/2 -mt-3'>

                             {<TbArmchair size={25} key={28} color={clickSeat[27].col} onClick={()=>colchg(28)}/>} 
                             {<TbArmchair size={25} key={29} color={clickSeat[28].col} onClick={()=>colchg(29)}/>} 
                             {<TbArmchair size={25} key={30} color={clickSeat[29].col} onClick={()=>colchg(30)}/>} 
                             {<TbArmchair size={25} key={31} color={clickSeat[30].col} onClick={()=>colchg(31)}/>} 
                             {<TbArmchair size={25} key={32} color={clickSeat[31].col} onClick={()=>colchg(32)}/>} 
                             {<TbArmchair size={25} key={33} color={clickSeat[32].col} onClick={()=>colchg(33)}/>} 
                             {<TbArmchair size={25} key={34} color={clickSeat[33].col} onClick={()=>colchg(34)}/>} 
                             {<TbArmchair size={25} key={35} color={clickSeat[34].col} onClick={()=>colchg(35)}/>} 
                             {<TbArmchair size={25} key={36} color={clickSeat[35].col} onClick={()=>colchg(36)}/>}

                            </div>
                        </div>   
                           
                        </div>
                        
                        
                        </div> 
                        
                    </div>


                </div>
                <div className='w-1/2'>
                    <div className='h-20 p-3'>
                       
                           <p className='flex'><span className=' text-lg'>Komban Travels</span>


                           <Player
                            autoplay={true}
                            loop={true}
                            controls={true}
                            src="https://assets1.lottiefiles.com/packages/lf20_kXpz0jNKs6.json"
                            style={{ height: '30px',width:'30px', marginLeft:'10px',marginTop:'-4px'}}
                            ></Player>

                           </p>
                           <p className='text-sm text-zinc-400'>Volvo Multi-Axle A/C Semi Sleeper (2+2)</p>
                           <p className='text-xs text-green-500'>{"=>"} High Safety and Hygiene</p>
                      
                    </div>
                    <div className='flex'>
                    <div className='w-1/2 h-[15.7rem] p-3'>
                        <p>Seats Selected :{}</p>
                        <p className='mt-5'>Boarding Point Details :</p>
                        <p className='text-green-400'>Mumbai</p>
                        <p className='border rounded bg-[#2B60DE]  text-center w-48 text-white'>3:02 AM,19.10.2020</p>


                        <p className='mt-5'>Dropping Point Details :</p>
                        <p className='text-green-400'>Chennai</p>
                        <p className='border rounded bg-[#2B60DE] text-center w-48 text-white'>3:02 AM,19.10.2020</p>




                    </div>
                    <div className='w-1/2 p-4'>

                        <p className='text-lg'>PRICE</p>
                        <div className=' h-48'>
                            <ul className='flex p-2'>
                                <li className='ml-5'>Total Basefare</li>
                                <li className='ml-auto'>{"899"}</li>
                            </ul>
                            <ul className='flex p-2'>
                                <li className='ml-5'>Taxes & fees</li>
                                <li className='ml-auto'>{"32.25"}</li>
                            </ul>
                            <ul className='flex p-2 mt-6'>
                                <li className='ml-5'>Final Price</li>
                                <li className='ml-auto'>{"1000"}</li>
                            </ul>
                            <button className='bg-[#23cf95] w-24 h-8 rounded-xl p-1 text-white font-bold mt-5 ml-[9rem]'>Continue</button> 
                        </div>


                    </div>
                    </div>

                </div>
                
            </div>
            
          </div>

        )
    })

    return( 
                <div className="container static rounded-xl p-10 overflow-y-auto max-h-[640px]">


                    <div className="container rounded-lg bg-slate-50 p-4 shadow-md absolute w-[72rem] -ml-5 -mt-12 hover:scale-105 duration-100">
                          <div className="flex">
                            <div className="text-green-600 w-1/3"><span className="text-black">FROM : </span> {"Mumbai"}</div>
                            <div className="text-green-600 text-center w-1/3"><span className="text-black">TO : </span> {"Chennai"}</div>
                            <div className="text-end w-1/3">DEPARTURE DATE : {"19.10.2020"}</div>
                           </div>  
                    </div>

                    {values}
                    
                </div> 
    )

}

export default Booking;