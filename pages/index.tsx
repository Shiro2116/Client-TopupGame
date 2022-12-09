import { useEffect } from "react";
import Navbar from "../components/organisms/Navbar/Navbar";
import MainBanner from "../components/organisms/MainBanner/MainBanner";
import TransactionStep from "../components/organisms/Transanction-step";
import FeatureGames from "../components/organisms/FeatureGames";
import Reached from "../components/organisms/Reached";
import { Story } from "../components/organisms/Story";
import { FooterUI } from "../components/organisms/Footer";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGames />
      <Reached />
      <Story/>
      <FooterUI/>
    </>
  );
}
