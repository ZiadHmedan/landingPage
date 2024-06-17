import { useState } from "react";
import { Header } from "./components";
// import Hero from "./pages/Hero";
// import Features from "./pages/Features";
// import Features from "./pages/Features";
import { GetStarted, Features, Hero, Testimonials, ContactUs } from "./pages";
import { features, testimonials } from "./data";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(show => !show);
  }
  return (
    <>
      {/* <img src={bgHeader} alt="background " className="absolute  z-[-1] top-[-15%] right-[-16%] "/> */}

      <Header isOpen={isOpen} handleOpen={handleOpen} />
      <Hero />
      <main>
        <Features features={features} />
        {/* <Testimonials testimonials={testimonials}/> */}
        <GetStarted />
      </main>
      <ContactUs/>
    </>
  );
}

export default App;
