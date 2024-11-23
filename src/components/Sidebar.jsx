import logo from "../assets/Group.png";
import textLogo from "../assets/Group.svg";
import rightArrow from "../assets/ChevronRight.png";
import leftArrow from "../assets/ChevronLeftt.png";
import searchIcon from "../assets/search.svg";
import setting from "../assets/settings.svg";
import PropTypes from "prop-types";

import { menuItems } from "./data";
import { useState } from "react";
function Sidebar({ handleToggle, toggleSidebar }) {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <>
      {toggleSidebar ? (
        <aside className="max-w-64 fixed top-0 z-20  left-0 sm:static lg:block md:block text-[#AEB9E1] border-r border-[#0F172A] h-full shadow-[0_0_2px_rgba(0,0,0,0.5)]  bg-[#0a112a] transition-transform transform peer-checked:translate-x-full sm:translate-x-0 ">
          <div className="p-7">
            <div className="flex justify-between items-center w-full  ">
              <div className="flex">
                <img src={logo} alt="logo" />
                <img className="w-[104px] pl-1" src={textLogo} alt="textLogo" />
              </div>
              <button
                onClick={handleToggle}
                className="flex justify-between w-[15px] cursor-pointer"
              >
                <img src={rightArrow} />
                <img src={leftArrow} />
              </button>
            </div>
            <div className="mt-9  ">
              <div className="flex bg-[#0B1739] border border-[#343B4F]  rounded-md px-3 py-2  items-center ">
                <img width={15} src={searchIcon} alt="icon" />
                <input
                  className="bg-transparent ml-2 outline-none text-[#AEB9E1] "
                  placeholder="Search for..."
                />
              </div>
              <div className="mt-7">
                <div className=" space-y-1 text-[#AEB9E1] ">
                  {menuItems.map((item, index) => (
                    <div className="flex justify-between py-3" key={index}>
                      <button
                        onClick={() => setActiveButton(index)}
                        key={item}
                        className=" text-left rounded-lg flex items-center"
                      >
                        <img
                          className={`${
                            activeButton === index
                              ? "filter-active mr-2"
                              : " mr-2"
                          }`}
                          src={item.img}
                        />
                        <span
                          className={`${
                            activeButton === index ? "text-[#CB3CFF]" : ""
                          }`}
                        >
                          {item.text}
                        </span>
                      </button>
                      <svg
                        width="5"
                        height="7"
                        viewBox="0 0 5 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={` ${
                          activeButton === index ? "text-[#CB3CFF]" : ""
                        }`}
                      >
                        <path
                          d="M0.75 6.5L3.75 3.5L0.75 0.5"
                          stroke={
                            activeButton === index ? "#CB3CFF" : "#AEB9E1"
                          }
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-t-[#343B4F] p-7 flex">
            <img className="mr-2" src={setting} />
            <button>
              <span>Settings</span>
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
Sidebar.propTypes = {
  toggleSidebar: PropTypes.bool.isRequired, // Must be a boolean
  handleToggle: PropTypes.func.isRequired, // Must be a function
};

export default Sidebar;
