import { lazy, Suspense } from "react";
import "./Views.scss";
import { ConfigProvider, theme } from "antd";
import { useSelector } from "react-redux";
import { BiUpArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
// import { themeSwitcher } from "src/redux/actions/themeAction";
// import { FaMoon, FaSun } from "react-icons/fa";

const Layout = lazy(() => import("../layout"));
// import Routing from "@routing";

function Views() {
  // const dispatch = useDispatch();
  const [isScroll, setIsScroll] = useState(false);
  const { isDark = false } = useSelector((store: any) => store.theme);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY; // => scroll position
  //   console.log("scrollPosition", scrollPosition);
  // };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      <button
        className={`bottom-top  ${isScroll ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <BiUpArrow size={30} />
      </button>
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
