import CoolStuffSection from "../components/CoolStuffSection";
import Footer from "../components/Footer";
import PresentationSection from "../components/PresentationSection";

const Home = () => (
  <main className="flex flex-col gap-40">
    <PresentationSection />
    <CoolStuffSection />
    <Footer />
  </main>
);

export default Home;
