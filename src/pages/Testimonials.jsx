/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function Testimonials({ testimonials }) {
  const [isActive, setIsActive] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsActive((isActive + 1) % 5 === 0 ? 1 : (isActive + 1) % 5);
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  const [width, setWidth] = useState(0);
  const slider = useRef();
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.clientWidth );
  }, []);

  return (
    <motion.section
      ref={slider}
      className="  xl:mt-[106px]  mt-[54px]  xl:mb-[172px] mb-[42px]    overflow-hidden"
    >
      <h2 className="h2-text  text-center  xl:mb-[56px] mb-[62px]  ">
        What they’ve said
      </h2>

      <motion.ul
        drag="x"
        dragConstraints={{ right: 0, left:-width}}
        className=" max-lg:hidden  flex cursor-grab mt-[92px]  "
      >
        {testimonials.map(({ id, Name, comment, avatar }) => (
          <li
            key={id}
            className={` min-h-[220px] min-w-[540px] relative  transition ease-in-out  duration-700 -z-10   mx-auto `}
          >
            <div>
              <img
                src={avatar}
                alt={`${Name}-avatar`}
                className="  rounded-full absolute right-[50%] translate-x-[50%] translate-y-[-50%] w-[72px] h-[72px]"
              />
            </div>
            <h3 className="h3-text text-center mt-[67px] max-xl:mt-[60px]">
              {Name}
            </h3>
            <p className={`p-text  text-center   mt-5  font-vitenam xl:px-10`}>
              {comment}
            </p>
          </li>
        ))}
      </motion.ul>

      <ul className=" lg:hidden   bg-almost-white -z-50 relative mx-auto w-[340px] min-h-[248px]   mt-[158px]    flex flex-col gap-10 ">
        {testimonials.map(({ id, Name, comment, avatar }) => (
          <li
            key={id}
            className={`   transition ease-in-out  duration-700 absolute -z-10   mx-auto ${
              id === isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <img
                src={avatar}
                alt={`${Name}-avatar`}
                className="  rounded-full absolute right-[50%] translate-x-[50%] translate-y-[-50%] w-[72px] h-[72px]"
              />
            </div>
            <h3 className="h3-text text-center mt-[67px] max-xl:mt-[60px]">
              {Name}
            </h3>
            <p className={`p-text  text-center   mt-5  font-vitenam xl:px-10`}>
              {comment}
            </p>
          </li>
        ))}
      </ul>
      <ul className=" lg:hidden flex gap-1 mx-auto mt-5 justify-center">
        {testimonials.map(({ id }) => (
          <li
            key={id}
            className={`w-2 h-2  ${
              id === isActive ? "bg-BrightRed" : "bg-white"
            } border border-BrightRed rounded-full`}
          ></li>
        ))}
      </ul>
      <div className="grid place-items-center pb-2">
        <button className="btn btn-orange xl:mt-[88px] mt-[50px] z-30 ">
          Get started
        </button>
      </div>

      {/* <ul
        className="grid grid-cols-4 gap-[92px] w-[2250px]  
       "
      >
        {testimonials.map(({ id, Name, comment, avatar }) => (
          <li key={id} className="bg-red-400 px-2 order-">
            <img src={avatar} alt={ `${Name}-avatar`  } className="w-[72px] h-[72px] mx-auto" />
            <h3 className="h3-text text-center mt-6 mb-5">{Name}</h3>
            <p className="p-text  text-center font-vitenam">
              {comment}
            </p>
          </li>
        ))}
      </ul> */}
    </motion.section>
    // <section className="mt-[62px] xl:mt-[146px]   ">
    //   <ul className="flex gap-7 w-[2050px] mt-[62px] xl:mt-[92px] xl:test">
    // {
    //   testimonials.map(({id, Name, comment})=>(
    //     <li key={id} className="bg-slate-300 w-[540px] max-sm:w-[340px] shrink-0 grow-0 xl:test1  ">
    //       <h3 className="h3-text text-center mb-5" >{Name}</h3>
    //       <p className={`text-center p-text pb-10   bg-red-200 ${id=="01"?"px-10" : "px-9"}`}>{comment}</p>
    //     </li>
    //   ))
    // }
    //   </ul>

    // </section>
  );
}
