import BestSeler from "../components/BestSeler";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Newsletter from "../components/Newsletter";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeler />
      <OurPolicy />
      <Newsletter />
    </div>
  );
};

export default Home;
