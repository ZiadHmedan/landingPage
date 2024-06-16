export default function Navbar() {
  return (
    <nav className="">
      {/* <ul className=" space-y-6 xl:space-y-0 tracking-xl font-bold mx-auto xl:flex xl:gap-8 items-center"> */}
      <ul className="max-xl:hidden flex tracking-xl font-bold mx-auto gap-8 font-base">
        <li className="hover:opacity-50  transition ease-in-out duration-300">
          <a href="#">Pricing</a>
        </li>
        <li className=" hover:opacity-50   transition  ease-in-out duration-300">
          <a href="#">Product</a>
        </li>
        <li className=" hover:opacity-50 transition  ease-in-out duration-300">
          <a href="#">About Us</a>
        </li>
        <li className=" hover:opacity-50  transition   ease-in-out duration-300">
          <a href="#">Careers</a>
        </li>
        <li className=" hover:opacity-50  transition  ease-in-out duration-300">
          <a href="#">Community</a>
        </li>
      </ul>
    </nav>
  );
}
