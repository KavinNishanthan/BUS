import { Component } from "react";
import { Player } from '@lottiefiles/react-lottie-player';

class Booking extends Component{

       render(){
        return(
            <div className="container p-6">
                <div className="container static rounded-xl p-6 overflow-y-auto max-h-[400px]">
                    <div className="container ml-[9.5rem] rounded-lg bg-slate-50 p-4 shadow-xl absolute w-[50rem] -mt-14 hover:scale-105 duration-300">
                          <ul className="flex">
                            <li className="ml-1">FROM, {"Mumbai"}</li>
                            <li className="ml-40">TO, {"Chennai"}</li>
                            <li className="ml-40">DEPARTURE DATE: {"19.10.2020"}</li>
                           </ul>  
                    </div>

                    <div className="container mt-2 bg-white rounded-lg shadow p-4">

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
                                    style={{ height: '100px',width:'50px', marginLeft:'20px',marginTop:'-40px'}}
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

                                <div className="w-1/3 container border border-black flex">

                                    <div className="w-1/2 container border border-black">
hai
                                    </div>
                                    <div className="w-1/2 container border border-black">
hai
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
                            <p>
                            <ul className="flex text-xs text-green-600">
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
                        
                    </div>


                    <div className="container mt-2 bg-white rounded-lg shadow p-4">

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
                                    style={{ height: '100px',width:'50px', marginLeft:'20px',marginTop:'-40px'}}
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

                                <div className="w-1/3 container border border-black flex">

                                    <div className="w-1/2 container border border-black">
hai
                                    </div>
                                    <div className="w-1/2 container border border-black">
hai
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
                            <p>
                            <ul className="flex text-xs text-green-600">
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
                        
                    </div> 

                 <div className="container mt-2 bg-white rounded-lg shadow p-4">

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
                                    style={{ height: '100px',width:'50px', marginLeft:'20px',marginTop:'-40px'}}
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

                                <div className="w-1/3 container border border-black flex">

                                    <div className="w-1/2 container border border-black">
hai
                                    </div>
                                    <div className="w-1/2 container border border-black">
hai
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
                            <p>
                            <ul className="flex text-xs text-green-600">
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
                        
                    </div> 

                </div>    
            </div>
        )
       }

}

export default Booking;