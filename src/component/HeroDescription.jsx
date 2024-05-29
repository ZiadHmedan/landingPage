import Button from "../ui/Button";

export default function HeroDescription() {
  return (
    <div className="  text-center xl:text-left my-auto ">
      <h1 className="text-lg xl:text-xl leading-xl  xl:leading-xl1 tracking-sm   font-bold">
        Bring everyone together to build better products.
      </h1>
      <p className="mt-2 xl:mt-8 leading-xs xl:leading-xss  xl:max-w-[32ch] text-darkGrayishBlue  ">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <div className=" grid mt-7 xl:mt-10">
        <Button type="hero"/>
      </div>
    </div>
  );
}
