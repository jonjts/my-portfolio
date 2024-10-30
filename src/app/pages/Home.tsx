import CoolStuffSection from "../components/CoolStuffSection";
import Footer from "../components/Footer";
import PresentationSection from "../components/PresentationSection";
import TecsBeenUsedSection from "../components/TecsBeenUsedSection";

const Home = () => (
  <main className="flex flex-col gap-40">
    <PresentationSection />
    <CoolStuffSection />
    <TecsBeenUsedSection />
    <Footer />
  </main>
);

export default Home;
