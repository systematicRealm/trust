import Header from "./components/01_head/Header";
import Intro from "./components/02_body/components/01-intro/Intro";
import WhyUs from "./components/02_body/components/02-whyUs/WhyUs";

function App() {
  return (
    <div className="relative w-full h-full App bg-slate-200">
      <Header />
      <Intro />
      <WhyUs />
    </div>
  );
}

export default App;
