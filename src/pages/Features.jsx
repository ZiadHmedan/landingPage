import { NumBtn } from "../components";

/* eslint-disable react/prop-types */
export default function Features({ features }) {
  return (
    <section className=" lg:container lg:mt-[132px] mt-[93px] grid md:grid-cols-2">
      <div className="container">
        <h2 className="h2-text lg:mb-6 mb-3 max-lg:text-center">
          What’s different about Manage?
        </h2>
        <p className="p-text md:max-w-[36ch] max-md:text-center max-lg:mb-[54px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className=" overflow-hidden">
        {features.map(({ id, num, title, description }) => (
          <div
            key={id}
            className="lg:grid grid-2   lg:gap-x-7 mb-12 lg:mb-10  items-baseline gap-1 "
          >
         

            <div className="ml-2 overflow-hidden gap-2 grid max-md:flex flex-wrap items-baseline  max-lg:w-full max-lg:bg-PaleRed max-lg:rounded-l-full lg:hidden ">
              <NumBtn style="row-span-2 h-[39px]">{num}</NumBtn>

              <h3 className="h3-text mb-2 max-xs:text-[14px]">{title}</h3>
            </div>
            <NumBtn style="row-span-2 max-lg:hidden h-[39px]">{num}</NumBtn>

            <h3 className="h3-text mb-2 max-lg:hidden ">{title}</h3>
            <p className="max-lg:pl-4 max-lg:pr-[14px] max-lg:mt-2 text-[14px] p-text max-w-[403px]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
