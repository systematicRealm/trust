import Header from "./components/01_head/Header";
import Intro from "./components/02_body/components/01-intro/Intro";
import WhyUs from "./components/02_body/components/02-whyUs/WhyUs";
import OurServices from "./components/02_body/components/03-ourServices/OurServices";
import OurProjects from "./components/02_body/components/04-ourProjects/OurProjects";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full App bg-slate-200">
      <Header />
      <Intro />
      <WhyUs />
      <OurServices />
      <OurProjects />
    </div>
  );
}

export default App;
