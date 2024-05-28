// /* eslint-disable react/no-unknown-property */
import logo from "../assets/images/logo.svg";
import humburgerIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import heroImage from "../assets/images/illustration-intro.svg";
import bgHeader from "../assets/images/bg-tablet-pattern.svg";
import Navbar from "../component/Navbar";
import UlNav from "../component/UlNav";
import HeroDescription from "../component/HeroDescription";
import Button from "../ui/Button";
// eslint-disable-next-line react/prop-types
export default function Header({ isOpen, handleOpen }) {
  return (
    <header className="container  pt-[33px]  overflow-clip  ">
      <img src={bgHeader} alt="header-background" className="absolute top-[-100px] right-[-100px] z-[-1]  " />
      {/* header on desctop */}
      <div className="flex justify-between items-center  ">
        <a href="#">
          <img src={logo} alt="manage-logo" />
        </a>
        <Navbar />
        <Button type="header" />
        {/* humburger or close menu */}
        <button className="xl:hidden z-20 " onClick={handleOpen}>
          {!isOpen ? (
            <img src={humburgerIcon} alt="humburgerIcon" />
          ) : (
            <img src={closeIcon} alt="closeIcon"  className=""/>
          )}
        </button>
      </div>

      <div className="grid   justify-between xl:grid-cols-2 xl:mt-[120px] ">
        {/* show the hero imgage or nav depend on isOpen */}
        <div className="mt-[35px] xl:order-2 xl:ml-auto	mr-[-10px] z-10">
          {!isOpen ? (
            <img
              src={heroImage}
              alt="illustration-intro"
              className="mx-auto "
            />
          ) : (
            <div className="bg-white text-center py-10 xl:hidden    ">
              <UlNav />
            </div>
          )}
        </div>
        {/* hero title and subtitle */}
        <HeroDescription />
      </div>
    </header>
  );
}
