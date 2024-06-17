/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { logo, humburgerIcon, closeIcon } from "../utils";
// import Button from "./Button";
// import Navbar from "./Navbar";
// export default function Header({isOpen, handleOpen}) {
//   return (
//     <header className="container">
//       <div className="flex-center">
//         <a href="#">
//           <img src={logo} alt="manage-logo" />
//         </a>
//         <Navbar />

import { closeIcon, humburgerIcon, logo } from "../utils";
import Navbar from "./Navbar";

//         <Button type="header" />
//         <button className="xl:hidden z-20 " onClick={handleOpen}>
//           {!isOpen ? (
//             <img src={humburgerIcon} alt="humburgerIcon" />
//           ) : (
//             <img src={closeIcon} alt="closeIcon" className="" />
//           )}
//         </button>
//       </div>
//     </header>
//   );
// }

export default function Header({ isOpen, handleOpen }) {
  return (
    <header className=" container flex   justify-between xl:mt-[73px] mt-8 items-center  ">
      <a href="#">
        <img src={logo} alt="manage-logo" />
      </a>

      <Navbar />
      <button className=" btn xl:grid  hidden btn-orange">
        Get Started
      </button>
   
      <button className="xl:hidden" onClick={handleOpen}>
        {!isOpen ? (
          <img src={humburgerIcon} alt="humburgerIcon" />
        ) : (
          <img src={closeIcon} alt="closeIcon" className="" />
        )}
      </button>
    </header>
  );
}
