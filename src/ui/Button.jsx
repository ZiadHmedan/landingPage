// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// function Button({moreStyle, type}) {
//   //   "mx-auto text-sm grid content-center xl:mx-0 text-softPink bg-BrightRed rounded-full   w-[137px] h-11 mb-auto text-center";
//   const base = "btn-shadow w-[137px] h-[44px]  text-softPink  bg-BrightRed text-xss rounded-full  bg-BrightRed  hover:bg-BrightRedLight transition ease-in-out duration-500  shadow-BrightRed"
//   const styles ={
//     hero:base + "hidden xl:grid content-center justify-center ",

//   }
//   console.log(styles["hero"]);
//   return (
//     <a href="#"  className= {styles[type]}>
//       Get Started
//     </a>
//   );
// }

// export default Button;









// eslint-disable-next-line react/prop-types
function Button({ type }) {
  const base =
    "mx-auto text-xs grid content-center xl:mx-0 text-softPink bg-BrightRed rounded-full btn-shadow  w-[137px] h-11 mb-auto text-center hover:bg-BrightRedLight transition ease-in-out duration-500  shadow-BrightRed";
  const styles = {
    header: base + " hidden  text-center   xl:inline-block",
    hero: base + " inline-block  justify-self-start",
  };
  return (
    <a href="#"  className={styles[type]}>
      Get Started
    </a>
  );
}

export default Button;
