import AllProducts from "@/components/AllProducts";
import BannerSection from "@/components/BannerSection";
import Marquee from "@/components/Marquee";
import PriceDown from "@/components/PriceDecrease";
import PriceUp from "@/components/PriceIncrease";


export default function Home() {
  return (
    <div>
      <Marquee/>
      <BannerSection/>
      <PriceUp/>
      <PriceDown/>
      <AllProducts/>
    </div>
  );
}
