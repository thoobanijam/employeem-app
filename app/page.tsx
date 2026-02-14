import Image from "next/image";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import PowerfullFeatures from "./Components/PowerFeatures";
import WhoBenefit from "./Components/WhoBenefits";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <LandingPage/>
    <Map/>
    <PowerfullFeatures/>
    <WhoBenefit/>
    <Footer/>
    </div>
  );
}
