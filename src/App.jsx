import { useState } from "react";
import { Header } from "./components";
// import Hero from "./pages/Hero";
// import Features from "./pages/Features";
// import Features from "./pages/Features";

import { GetStarted, Features, Hero, Testimonials, ContactUs } from "./pages";
import { features, testimonials } from "./data";
import { bgTablet } from "./utils";
import { useInView } from "react-intersection-observer";
function App() {
  const { ref, inView } = useInView({
    threshold: 0.2,
});
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(show => !show);
  }

  return (
    <>
      <img src={bgTablet} alt="bav" className={`xl:hidden transition ease-in-out duration-700 absolute ${!isOpen ? "translate-y-[-200%] ":" top-0"}  -z-10`} />
      <Header inView ={inView} isOpen={isOpen} handleOpen={handleOpen} />
      <Hero />
      <main ref={ref}>
        <Features features={features} />
        <Testimonials testimonials={testimonials} />
        <GetStarted />
      </main>
      <ContactUs />
    </>
  );
}

export default App;
