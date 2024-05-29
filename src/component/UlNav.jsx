export default function UlNav() {
  return (
    <ul className=" space-y-6 xl:space-y-0 tracking-xl font-bold mx-auto xl:flex xl:gap-8 items-center">
      <li className="hover:text-darkGrayishBlue  transition ease-in-out duration-300">
        <a href="#">Pricing</a>
      </li>
      <li className=" hover:text-darkGrayishBlue   transition  ease-in-out duration-300">
        <a href="#">Product</a>
      </li>
      <li className=" hover:text-darkGrayishBlue  transition  ease-in-out duration-300">
        <a href="#">About Us</a>
      </li>
      <li className=" hover:text-darkGrayishBlue  transition   ease-in-out duration-300">
        <a href="#">Careers</a>
      </li>
      <li className=" hover:text-darkGrayishBlue  transition  ease-in-out duration-300">
        <a href="#">Community</a>
      </li>
    </ul>
  );
}
