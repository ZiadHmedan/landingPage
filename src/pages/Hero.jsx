// import { Button } from "../components";
// import { heroImage } from "../utils";

import { heroImage } from "../utils";

// export default function Hero() {
//   return (
//     <div className="grid xl:grid-cols-2 container     content-center h-screen  ">
//       <div className="  text-center xl:text-left max-xl:order-2 grid content-center">
//         <h1 className="text-lg xl:text-xl leading-xl  xl:leading-xl1 tracking-sm   font-bold">
//           Bring everyone together to build better products.
//         </h1>
//         <p className=" leading-xs xl:leading-xss  xl:max-w-[32ch] text-darkGrayishBlue  ">
//           Manage makes it simple for software teams to plan day-to-day tasks
//           while keeping the larger team goals in view.
//         </p>
//         <div className=" grid ">
//           <Button type="hero" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Hero() {
  return (
    <div className="container grid lg:grid-cols-2 xl:mt-[120px] mt-9 ">
      <div className="max-lg:order-2 place-self-center ">
        <h1 className="h1-text max-lg:text-center ">
          Bring everyone together to build better products.
        </h1>
        <p className="p-text max-lg:text-center max-lg:px-3 xl:max-w-[36ch] xl:mt-8 mt-2 xl:mb-10 mb-7">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="max-lg:grid">
          <button className="btn btn-orange">Get Started</button>
        </div>
      </div>
      <div className="max-lg:justify-self-end max-lg:order-1 ">
        <img src={heroImage} alt="hero-image" />
      </div>
    </div>
  );
}
