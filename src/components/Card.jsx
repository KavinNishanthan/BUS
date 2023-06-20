import React, { Component } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import Date from "./Date";
var Citydata = require("../assets/cities.json");

class Card extends Component {
  initialState = {
    FROM: "",
    TO: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    //console.log(name,value);
    this.setState({ [name]: [value] });
  };

  commitChange = () => {
    let FRO = this.state.FROM;
    let TO = this.state.TO;
    this.setState({ FROM: TO });
    this.setState({ TO: FRO });
  };

  onSearch = (name) => {
    this.setState({ FROM: name });
  };

  onSearchh = (name) => {
    this.setState({ TO: name });
  };

  sendCopy = () => {
    const { FROM, TO } = this.state;
    this.props.copiedData({ FROM, TO });
    this.setState(this.initialState);
  };

  render() {
    return (
      <div className="container bg-blue-300  rounded-lg -mt-[80px]">
        <div className="container  border border-white bg-white rounded-xl">
          <h1 className=" ml-20 mt-5 text-sm font-bold">
            <a
              href="null"
              className="text-xl font-semibold underline decoration-2 underline-offset-2 decoration-green-400"
            >
              B
            </a>
            us Ticket Booking.
            <a href="null" className="text-sm font-semibold text-sky-500">
              Travelling with a group? Hire a bus.
            </a>
          </h1>

          <div className="h-96 p-14">
            <label className="block">
              <span class="block text-lg font-medium text-slate-700 ml-1">
                From
              </span>
              <input
                name="FROM"
                type="text"
                className="peer p-3 rounded-lg w-full bg-gray-300 mt-1 focus:border
                blue-500 foucs:bg-gray-600 focus: outline-offset-0"
                placeholder="Leaving From"
                onChange={this.handleChange}
                value={this.state.FROM}
              />

              {Citydata.filter((item) => {
                const searchText = this.state.FROM;
                const cname = item.name.toLowerCase();
                return searchText && cname.startsWith(searchText);
              }).map((item, index) => (
                <div
                  id="dropdownOffset"
                  class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-1"
                >
                  <ul
                    class="py-2 text-sm text-gray-300 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li onClick={() => this.onSearch(item.name)} key={index}>
                      {item.name}
                    </li>
                  </ul>
                </div>
              ))}
            </label>

            <div
              className="justify-between  content-center mt-5 ml-[12rem]"
              onClick={this.commitChange}
            >
              {" "}
              {<RiArrowLeftRightLine size={30} />}
            </div>

            <label>
              <span class="block text-lg font-medium text-slate-700 ml-1">
                To
              </span>
              <input
                name="TO"
                type="text"
                className="p-3 rounded-lg w-full bg-gray-300 mt-2 focus:border
                blue-500 foucs:bg-gray-600 focus: outline-offset-0"
                placeholder="Going To"
                onChange={this.handleChange}
                value={this.state.TO}
              />

              {Citydata.filter((item) => {
                const searchText = this.state.TO;
                const cname = item.name.toLowerCase();
                return searchText && cname.startsWith(searchText);
              }).map((item, index) => (
                <div
                  id="dropdownOffset"
                  class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 mt-1"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                  >
                    <li onClick={() => this.onSearchh(item.name)} key={index}>
                      {item.name}
                    </li>
                  </ul>
                </div>
              ))}
            </label>

            {<Date />}

            <button className="mt-[1.4rem] ml-[8.5rem] w-36 bg-[#1ec273] h-10 rounded-2xl px-4 text-white font-bold" onClick={this.sendCopy}>
              Search Bus
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
