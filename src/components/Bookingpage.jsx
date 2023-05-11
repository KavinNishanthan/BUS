import { Component } from "react";
import { Player } from '@lottiefiles/react-lottie-player';

class Booking extends Component{

       render(){
        return(
          


                <div className="container static rounded-xl p-10 overflow-y-auto max-h-[640px]">


                    <div className="container rounded-lg bg-slate-50 p-4 shadow-md absolute w-[72rem] -ml-5 -mt-12 hover:scale-105 duration-100">
                          <div className="flex">
                            <div className="text-green-600 w-1/3"><span className="text-black">FROM : </span> {"Mumbai"}</div>
                            <div className="text-green-600 text-center w-1/3"><span className="text-black">TO : </span> {"Chennai"}</div>
                            <div className="text-end w-1/3">DEPARTURE DATE : {"19.10.2020"}</div>
                           </div>  
                    </div>



                    <div className="container mt-4 bg-white rounded-lg shadow p-4">

                        <div className="p-4 w-full">

                            <div className="flex">
                         
                                <div className="w-1/3 container ">
                                    
                                    <p className="text-xl">MMM Travels</p>
                                </div>

                                <div className="w-1/3 flex">
                                    <label className='block'>
                                    <p className="text-xl ml-[5.5rem]">10:20</p>
                                    <span class="block text-sm font-medium text-slate-500 ml-[5.5rem]">{"Mumbai"}</span>
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
                                <p className="text-xl ml-[1.5rem]">05:30
                                <Player
                                    autoplay={true}
                                    loop={true}
                                    controls={true}
                                    src="https://assets7.lottiefiles.com/temp/lf20_7Qkvy7.json"
                                    style={{ height: '150px',width:'150px', marginLeft:'0px',marginTop:'-90px'}}
                                    ></Player>
                                </p>
                                <span class="block text-sm font-medium text-slate-500 ml-[1.5rem] -mt-[3.8rem]">{"Chennai"}</span>
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
                                              {"899"}
                                        </li>
                                    </ul>
                                    
                                      
                                    </div>
                                    <div className="w-1/2 text-zinc-400 mt-5">

                                        <ul>
                                            <li className="text-center">14 window seats</li>
                                            <li className="text-center">Total 36 seats</li>
                                        </ul>

                                    </div>

                                </div>

                            </div>
                            <p className=" text-sm text-zinc-400 mb-2">Scania A/C Semi Sleeper (2+2)</p>
                            <div className="flex">
                                
                            <div className="container text-xs w-9 h-[1.3rem] p-1 rounded-sm bg-green-600 text-white mt-[0.35rem]">
                                 4.5/5
                            </div>

                            <p className="border-r ml-3 h-8 mr-3 border-gray-700"></p>
                            <p className=" text-xs text-zinc-400 mt-2">356 Ratings</p>

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

                            <button className='bg-[#23cf95] ml-72 h-10 rounded-xl p-2 text-white font-bold '>Select Seat 

                            <p>
                            <Player

                                autoplay={true}
                                loop={true}
                                controls={true}
                                src="https://assets10.lottiefiles.com/packages/lf20_hnvzkcfr.json"
                                style={{ height: '30px',width:'30px', marginLeft:'120px',marginTop:'-26px'}}

                            ></Player>
                            </p>
                            
                            
                            </button> 
                            </div>

                         </div>   


                        </div>
                        
                    </div>


                    <div className="container mt-4 bg-white rounded-lg shadow p-4">

                        <div className="p-4 w-full">

                            <div className="flex">
                         
                                <div className="w-1/3 container ">
                                    
                                    <p className="text-xl">Parveen Travels</p>
                                </div>

                                <div className="w-1/3 flex">
                                    <label className='block'>
                                    <p className="text-xl ml-[5.5rem]">10:20</p>
                                    <span class="block text-sm font-medium text-slate-500 ml-[5.5rem]">{"Mumbai"}</span>
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
                                <p className="text-xl ml-[1.5rem]">05:30
                                <Player
                                    autoplay={true}
                                    loop={true}
                                    controls={true}
                                    src="https://assets7.lottiefiles.com/temp/lf20_7Qkvy7.json"
                                    style={{ height: '150px',width:'150px', marginLeft:'0px',marginTop:'-90px'}}
                                    ></Player>
                                </p>
                                <span class="block text-sm font-medium text-slate-500 ml-[1.5rem] -mt-[3.8rem]">{"Chennai"}</span>
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
                                              {"899"}
                                        </li>
                                    </ul>
                                    
                                      
                                    </div>
                                    <div className="w-1/2 text-zinc-400 mt-5">

                                        <ul>
                                            <li className="text-center">14 window seats</li>
                                            <li className="text-center">Total 36 seats</li>
                                        </ul>

                                    </div>

                                </div>

                            </div>
                            <p className=" text-sm text-zinc-400 mb-2">Scania A/C Semi Sleeper (2+2)</p>
                            <div className="flex">
                                
                            <div className="container text-xs w-9 h-[1.3rem] p-1 rounded-sm bg-green-600 text-white mt-[0.35rem]">
                                 4.5/5
                            </div>

                            <p className="border-r ml-3 h-8 mr-3 border-gray-700"></p>
                            <p className=" text-xs text-zinc-400 mt-2">356 Ratings</p>

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

                            <button className='bg-[#23cf95] ml-72 h-10 rounded-xl p-2 text-white font-bold '>Select Seat 

                            <p>
                            <Player

                                autoplay={true}
                                loop={true}
                                controls={true}
                                src="https://assets10.lottiefiles.com/packages/lf20_hnvzkcfr.json"
                                style={{ height: '30px',width:'30px', marginLeft:'120px',marginTop:'-26px'}}

                            ></Player>
                            </p>
                            
                            
                            </button> 
                            </div>

                         </div>   


                        </div>
                        
                    </div>


                    <div className="container mt-4 bg-white rounded-lg shadow p-4">

                        <div className="p-4 w-full">

                            <div className="flex">
                         
                                <div className="w-1/3 container ">
                                    
                                    <p className="text-xl">KPN Travels</p>
                                </div>

                                <div className="w-1/3 flex">
                                    <label className='block'>
                                    <p className="text-xl ml-[5.5rem]">10:20</p>
                                    <span class="block text-sm font-medium text-slate-500 ml-[5.5rem]">{"Mumbai"}</span>
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
                                <p className="text-xl ml-[1.5rem]">05:30
                                <Player
                                    autoplay={true}
                                    loop={true}
                                    controls={true}
                                    src="https://assets7.lottiefiles.com/temp/lf20_7Qkvy7.json"
                                    style={{ height: '150px',width:'150px', marginLeft:'0px',marginTop:'-90px'}}
                                    ></Player>
                                </p>
                                <span class="block text-sm font-medium text-slate-500 ml-[1.5rem] -mt-[3.8rem]">{"Chennai"}</span>
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
                                              {"899"}
                                        </li>
                                    </ul>
                                    
                                      
                                    </div>
                                    <div className="w-1/2 text-zinc-400 mt-5">

                                        <ul>
                                            <li className="text-center">14 window seats</li>
                                            <li className="text-center">Total 36 seats</li>
                                        </ul>

                                    </div>

                                </div>

                            </div>
                            <p className=" text-sm text-zinc-400 mb-2">Scania A/C Semi Sleeper (2+2)</p>
                            <div className="flex">
                                
                            <div className="container text-xs w-9 h-[1.3rem] p-1 rounded-sm bg-green-600 text-white mt-[0.35rem]">
                                 4.5/5
                            </div>

                            <p className="border-r ml-3 h-8 mr-3 border-gray-700"></p>
                            <p className=" text-xs text-zinc-400 mt-2">356 Ratings</p>

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

                            <button className='bg-[#23cf95] ml-72 h-10 rounded-xl p-2 text-white font-bold '>Select Seat 

                            <p>
                            <Player

                                autoplay={true}
                                loop={true}
                                controls={true}
                                src="https://assets10.lottiefiles.com/packages/lf20_hnvzkcfr.json"
                                style={{ height: '30px',width:'30px', marginLeft:'120px',marginTop:'-26px'}}

                            ></Player>
                            </p>
                            
                            
                            </button> 
                            </div>

                         </div>   


                        </div>
                        
                    </div>


                    <div className="container mt-4 bg-white rounded-lg shadow p-4">

                        <div className="p-4 w-full">

                            <div className="flex">
                         
                                <div className="w-1/3 container ">
                                    
                                    <p className="text-xl">SRK Travels</p>
                                </div>

                                <div className="w-1/3 flex">
                                    <label className='block'>
                                    <p className="text-xl ml-[5.5rem]">10:20</p>
                                    <span class="block text-sm font-medium text-slate-500 ml-[5.5rem]">{"Mumbai"}</span>
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
                                <p className="text-xl ml-[1.5rem]">05:30
                                <Player
                                    autoplay={true}
                                    loop={true}
                                    controls={true}
                                    src="https://assets7.lottiefiles.com/temp/lf20_7Qkvy7.json"
                                    style={{ height: '150px',width:'150px', marginLeft:'0px',marginTop:'-90px'}}
                                    ></Player>
                                </p>
                                <span class="block text-sm font-medium text-slate-500 ml-[1.5rem] -mt-[3.8rem]">{"Chennai"}</span>
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
                                              {"899"}
                                        </li>
                                    </ul>
                                    
                                      
                                    </div>
                                    <div className="w-1/2 text-zinc-400 mt-5">

                                        <ul>
                                            <li className="text-center">14 window seats</li>
                                            <li className="text-center">Total 36 seats</li>
                                        </ul>

                                    </div>

                                </div>

                            </div>
                            <p className=" text-sm text-zinc-400 mb-2">Scania A/C Semi Sleeper (2+2)</p>
                            <div className="flex">
                                
                            <div className="container text-xs w-9 h-[1.3rem] p-1 rounded-sm bg-green-600 text-white mt-[0.35rem]">
                                 4.5/5
                            </div>

                            <p className="border-r ml-3 h-8 mr-3 border-gray-700"></p>
                            <p className=" text-xs text-zinc-400 mt-2">356 Ratings</p>

                            </div>

                        <div className="flex mt-3">

                            <div className="w-1/2">
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

                            <button className='bg-[#23cf95] ml-72 h-10 rounded-xl p-2 text-white font-bold '>Select Seat 

                            <p>
                            <Player

                                autoplay={true}
                                loop={true}
                                controls={true}
                                src="https://assets10.lottiefiles.com/packages/lf20_hnvzkcfr.json"
                                style={{ height: '30px',width:'30px', marginLeft:'120px',marginTop:'-26px'}}

                            ></Player>
                            </p>
                            
                            
                            </button> 
                            </div>

                         </div>   


                        </div>
                        
                    </div> 
                    
                </div>    
        )
       }

}

export default Booking;