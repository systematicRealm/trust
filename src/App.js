import Header from "./components/01_head/Header";
import Intro from "./components/02_body/components/01-intro/Intro";
import WhyUs from "./components/02_body/components/02-whyUs/WhyUs";
import OurServices from "./components/02_body/components/03-ourServices/OurServices";
import OurProjects from "./components/02_body/components/04-ourProjects/OurProjects";
import ContactUs from "./components/02_body/components/05-contactUs/ContactUs";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full App bg-neutral-50">
      <Header />
      <Intro />
      <WhyUs />
      <OurServices />
      <OurProjects />
      <ContactUs />
    </div>
  );
}

export default App;
