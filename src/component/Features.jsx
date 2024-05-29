/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Paragraph from "../ui/Paragraph";
import SecondryHeader from "../ui/SecondryHeader";
import TritaryHeader from "../ui/TritaryHeader";
import bgHeader from "../assets/images/bg-tablet-pattern.svg";

import NumBtn from "./NumBtn";
export default function Features({ features }) {
  return (
    <section className=" relative grid xl:gap-[125px] xl:container xl:mt-[120px] xl:grid-cols-2  xl:justify-between mt-[95px]  ">
            <img src={bgHeader} alt="header-background" className="absolute centerPosition  z-[-1]  hidden xl:block" />

      <div className=" container xl:justify-self-start ">
      <SecondryHeader isCenter="true">What’s different about Manage?</SecondryHeader>
        {/* <h2 className="text-[30px] leading-[45px] tracking-[-.62px] font-extrabold text-center">
          What’s different about Manage?
        </h2>
        <p className="text-[14px] leading-[28px] font-normal text-center pr-5">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.{" "}
        </p> */}
        <Paragraph  moreStyles ="text-center xl:pr-5 mt-3 xl:pr-0 xl:mt-6 text-center">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </Paragraph>
      </div>

     

      <div className="ml-4 mt-[54px] xl:mt-0 space-y-[47px] ">
        {features.map(({ id, num, title, description }) => (
          <div key={id} className="">
            <div className=" flex items-center gap-4 xl:gap-7 bg-PaleRed xl:bg-white  rounded-l-full  ">
              <NumBtn>{num}</NumBtn>
              <TritaryHeader>{title}</TritaryHeader>
            </div>
            <Paragraph moreStyles="xl:ml-[99px] mt-2    ">{description}</Paragraph>
          </div>
        ))}
      </div>
    </section>
  );
}
