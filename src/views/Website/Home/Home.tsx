import HomeBanner from "src/components/HomeBanner";
import "./Home.scss";
import Logos from "src/components/Logos";
import ContentCards from "src/components/ContentCards";

const Home = () => {
  return (
    <div className="home">
      <HomeBanner />
      <Logos />
      <ContentCards />
    </div>
  );
};
export default Home;
