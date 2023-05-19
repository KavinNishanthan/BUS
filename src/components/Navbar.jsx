import React, { Component } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Booking from "./Bookingpage";
import bus from "../assets/2560px-Bus.svg.png";
import Card from "./Card";
import axios from 'axios';


class Navbar extends Component {

  initialState = {
    FROM: "",
    TO: "",
    Details: [],
    flag: false
  };

  state = this.initialState;


  copyState = (clone) => {
    this.setState({ ...this.state, clone });
  }


  handleSubmit = async (From, To) => {
    try {
      const res = await axios.get('http://localhost:8000', { params: { From, To } });
      console.log('check ', res.data)
      this.setState({ Details: res.data });
      console.log("12", this.state.Details)
      this.setState({ flag: true })
    } catch (err) {
      console.log(err);
    }
  }


  render() {

    return (
      <div className="p-5">
        <section className=" bg-blue-300 rounded-2xl p-9 mb-10">
          <div className="container w-full">
            <div className="flex py-0">
              <ul className="flex font-bold">
                <li className="p-4">
                  <Player
                    autoplay={true}
                    loop={true}
                    controls={true}
                    src="https://assets6.lottiefiles.com/packages/lf20_2PMsFKmVCe.json"
                    style={{
                      height: "30px",
                      width: "175px",
                      marginLeft: "-50px",
                      marginTop: "-5px",
                    }}
                  ></Player>
                </li>
                <li className="-ml-16 text-3xl font-semibold p-2 pr-7 border-r mr-3 border-gray-600">
                  BlueBus
                </li>
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Services</li>
              </ul>
              <button className="ml-auto bg-[#f23939] h-10 rounded-2xl mt-2 px-4 text-white font-bold">
                LogOut
              </button>
            </div>
            <div className="flex mt-40 ml-5">
              <div className="w-1/2"><Card handleSubmit={this.handleSubmit} copyState={this.copyState} /></div>
              <div className="w-1/2 ml-11">
                <img src={bus} alt="" />
              </div>
            </div>
          </div>
        </section>
        {this.state.flag && <Booking details={this.state.Details} />}
      </div>
    );
  }
};

export default Navbar;