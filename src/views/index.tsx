import { lazy, Suspense } from "react";
import "./Views.scss";

const Layout = lazy(() => import("../layout"));
// import Routing from "@routing";

function Views() {
  return (
    <Suspense fallback={""}>
      <Layout />
    </Suspense>
  );
}

export default Views;
