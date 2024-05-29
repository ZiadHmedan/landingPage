import { useState } from "react";
import Header from "./ui/Header";
import Features from "./component/Features";

// import Features from "./component/Features";
// const testimonials = [
//   {
//     id: 1,
//     Name: "Anisha Li",
//     comment:
//       "“Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
//   },
//   {
//     id: 2,
//     Name: "Ali Bravo",
//     comment:
//       "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is muchmore focused.”",
//   },
//   {
//     id: 3,
//     Name: "Richard Watts",
//     comment:
//       "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
//   },
//   {
//     id: 4,
//     Name: "Shanai Gough",
//     comment:
//       "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",

//   }
// ];
const features =[
  {
    id:1,
    num:"01",
    title:"Track company-wide progress",
    description:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."

  },
  {
    id:2,
    num:"02",
    title:"Advanced built-in reports",
    description:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."

  },
  {
    id:3,
    num:"03",
    title:"Everything you need in one place",
    description:"Stop jumping from one service to another to communicate, store files,track tasks and share documents. Manage offers an all-in-one team productivity solution."
  }
];
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(show => !show);
  }
  const modal = "font-vietnam text-DarkBlue    " ;
  return (
    <div className={`${modal} `}>
      {isOpen &&       <div className="bg-linear h-full w-full absolute z-1"></div>
}
      {/* <img src={bg} alt="bg" className=" absolute z-[-1]"/> */}
      <Header isOpen={isOpen} handleOpen={handleOpen} />
      <main>  
        <Features features={features}/>features
      </main>
    </div>
  );
}

export default App;
