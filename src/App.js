import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./pages/Header";
import Offers from "./pages/Offers";
import OurClients from "./pages/OurClients";
import Vision from "./pages/OurProjects";
import Services from "./pages/Services";
import SecondSlide from "./pages/SecondSlide";
import Sanskrit from "./pages/Sanskrit";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <div className="headerBox">
        <NavBar />
        <Header />
      </div>
      <div>
        <SecondSlide />
        <Offers />
        <OurClients />
      </div>
      <div>
        <Vision />
        <Services />
        <Sanskrit />
        <Footer />
      </div>
    </>
  );
};

export default App;
