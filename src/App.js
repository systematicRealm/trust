import Header from "./components/01_head/Header";
import Intro from "./components/02_body/components/01-intro/Intro";
import WhyUs from "./components/02_body/components/02-whyUs/WhyUs";
import OurServices from "./components/02_body/components/03-ourServices/OurServices";
import OurProjects from "./components/02_body/components/04-ourProjects/OurProjects";
import ContactUs from "./components/02_body/components/05-contactUs/ContactUs";
import OurPartners from "./components/02_body/components/06-ourPartners/OurPartners";
import CopyRight from "./components/02_body/components/07-copyRight/CopyRight";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full gap-24 App bg-neutral-50">
      <Header />
      <Intro />
      <OurServices />
      <OurProjects />
      <WhyUs />
      <OurPartners />
      <ContactUs />
      <CopyRight />
    </div>
  );
}

export default App;
