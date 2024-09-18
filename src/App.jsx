import { useState } from "react";
import { Header } from "./components";
// import Hero from "./pages/Hero";
// import Features from "./pages/Features";
// import Features from "./pages/Features";

import { GetStarted, Features, Hero, Testimonials, ContactUs } from "./pages";
import { features, testimonials } from "./data";
import { bgTablet } from "./utils";
function App() {
 
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(show => !show);
  }

  return (
    <div className="relative">
    
      {/* <img src={bgTablet} alt="bav" className={`xl:right-0 xl:top-[-10%] xl:translate-y-0 transition ease-in-out duration-700 absolute ${!isOpen ? "translate-y-[-200%] ":" top-0"}  -z-10`} /> */}
      <Header isOpen={isOpen} handleOpen={handleOpen} />
      <Hero />
      <main >
        <Features features={features} />
        <Testimonials testimonials={testimonials} />
        <GetStarted />
      </main>
      <ContactUs />
    </div>
  );
}

export default App;
