import Hero from "./Hero";
import PaketListesi from "./PaketListesi";
import Avantajlar from "./Avantajlar";
import Reviews from "./Reviews";
import CoverageMap from "./CoverageMap";
import StatNumbers from "./StatNumbers"
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <PaketListesi />
      <Avantajlar/>
      <StatNumbers />
      <WhatsAppButton/>
<Reviews />
<CoverageMap />
<Footer/>
    </div>
  );
}
