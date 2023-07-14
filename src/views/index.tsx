import { lazy, Suspense } from "react";
import "./Views.scss";
import { Button, ConfigProvider, theme } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { themeSwitcher } from "src/redux/actions/themeAction";
import { FaMoon, FaSun } from "react-icons/fa";

const Layout = lazy(() => import("../layout"));
// import Routing from "@routing";

function Views() {
  const dispatch = useDispatch();
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDark = false } = useSelector((store: any) => store.theme);
  return (
    <Suspense fallback={""}>
      {/* <Button className="theme-switcher d-none d-md-block">
        <FaSun
          size={20}
          onClick={() => dispatch(themeSwitcher(false))}
          className="mx-2 sun"
          color={isDark ? "black" : "#FDB813"}
        />
        <FaMoon
          size={20}
          className="mx-2 moon"
          onClick={() => dispatch(themeSwitcher(true))}
          color={isDark ? "white" : "black"}
        />
      </Button> */}
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: "#ff4742",
            fontFamily: "'Nunito', sans-serif",
          },
        }}
      >
        <Layout />
      </ConfigProvider>
    </Suspense>
  );
}

export default Views;
