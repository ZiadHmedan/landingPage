/* eslint-disable react/prop-types */
export default function NumBtn({ children, style }) {
  return (
    <button className={`${style} xl:row-span-2 text-white rounded-full font-bold tracking-xl w-[67px] h-[39px] grid content-center bg-BrightRed`}>
      {children}
    </button>
  );
}
