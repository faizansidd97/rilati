import { Outlet } from "react-router-dom";
import Header from "src/components/header";

const WebsiteLayout = () => (
  <>
    {/* <Header /> */}
    <Outlet />
  </>
);

export default WebsiteLayout;
