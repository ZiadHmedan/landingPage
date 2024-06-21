import { NumBtn } from "../components";

/* eslint-disable react/prop-types */
export default function Features({ features }) {
  return (
    <section className=" xl:container xl:mt-[132px] mt-[93px] grid lg:grid-cols-2">
      <div className="container">
        <h2 className="h2-text xl:mb-6 mb-3 max-xl:text-center">
          What’s different about Manage?
        </h2>
        <p className="p-text xl:max-w-[36ch] max-xl:text-center max-xl:mb-[54px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className=" overflow-hidden">
        {features.map(({ id, num, title, description }) => (
          <div
            key={id}
            className="xl:grid grid-2   xl:gap-x-7 mb-11 xl:mb-10  items-baseline gap-1 "
          >
            {/* <div className="bg-red-200 row-span-2">1</div>
            <div className="bg-red-300">2</div>
            <div className="bg-red-400">3</div> */}

            <div className="ml-2 overflow-hidden gap-2 grid max-lg:flex flex-wrap items-baseline  max-xl:w-full max-xl:bg-PaleRed max-xl:rounded-l-full xl:hidden ">
              <NumBtn style="row-span-2 h-[39px]">{num}</NumBtn>

              <h3 className="h3-text mb-2 max-xs:text-[14px]">{title}</h3>
            </div>
            <NumBtn style="row-span-2 max-xl:hidden h-[39px]">{num}</NumBtn>

            <h3 className="h3-text mb-2 max-xl:hidden ">{title}</h3>
            <p className="max-xl:px-2 p-text max-w-[403px]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
