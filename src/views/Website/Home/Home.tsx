import HomeBanner from "src/components/HomeBanner";
import "./Home.scss";
import Logos from "src/components/Logos";
import ContentCards from "src/components/ContentCards";
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";

const Home = () => {
  return (
    <Layout className="site-layout">
      <Content>
        <HomeBanner />
        <Logos />
        <ContentCards />
      </Content>
    </Layout>
  );
};
export default Home;
