/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { logo } from "../utils";
import MobileNavbar from "./MobileNavbar";

import Navbar from "./Navbar";

export default function Header({ isOpen, handleOpen }) {
  return (
    <>
      {isOpen && (
        <div className="bg-linear fixed top-0 right-0 left-0 bottom-0"></div>
      )}
      <header className="z-50  py-4 container fixed flex top-[33px] left-[50%] translate-x-[-50%] justify-between ">
        <a href="#">
          <img src={logo} alt="manage-logo" />
        </a>
        <Navbar />
         <MobileNavbar isOpen={isOpen}/>
        <button className=" btn xl:grid  hidden btn-orange">Get Started</button>

        <button className="xl:hidden" onClick={handleOpen}>
          <div className="flex flex-col gap-[3px]  ">
            <span
              className={`bg-DarkBlue w-6 h-1 transition ease-in-out duration-300 inline-block ${
                isOpen && " translate-y-[7px] rotate-45"
              } `}
            ></span>
            <span
              className={`bg-DarkBlue w-6 h-1 transition ease-in-out duration-300 inline-block ${
                isOpen && " opacity-0 "
              } `}
            ></span>
            <span
              className={`bg-DarkBlue w-6 h-1 transition ease-in-out duration-300 inline-block ${
                isOpen && "translate-y-[-7px] rotate-[-45deg] "
              } `}
            ></span>
          </div>
        </button>
      </header>
    </>
  );
}
