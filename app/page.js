import Navbar from "./Navbar";
import Hero from "./Hero";
import PaketListesi from "./PaketListesi";
import Avantajlar from "./Avantajlar";
import Reviews from "./Reviews";
import CoverageMap from "./CoverageMap";
import CallToAction from "./CallToAction";
import StatNumbers from "./StatNumbers"
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PaketListesi />
      <Avantajlar/>
      <StatNumbers />
<Reviews />
<CoverageMap />
<CallToAction />
<Footer/>
    </div>
  );
}
