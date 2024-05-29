/* eslint-disable react/prop-types */

export default function NumBtn({ children }) {
  return (
    <button className=" xl:absolute xl:translate-x-[-100%] xl:left-[-28px] text-white rounded-full font-bold tracking-xl px-6 py-3 bg-BrightRed">
      {children}
    </button>
  );
}
