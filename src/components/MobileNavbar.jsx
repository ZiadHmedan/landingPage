
export default function MobileNavbar({isOpen}) {
  return (

    <nav className={`absolute left-[50%]   translate-y-[50%] container z-50 transition ease-in-out duration-300  ${isOpen ? " translate-x-[-50%] " :"translate-x-[100%]"} `}>
        <ul className="  text-center space-y-6 bg-white py-10 font-bold ">
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
  )
}
