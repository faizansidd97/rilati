import { Navigate, Route, Routes } from "react-router-dom";
import Environment from "../network/baseUrl";
import Home from "src/views/Website/Home/Home";
import AuthLayout from "./AuthLayout";
import Login from "src/views/auth/login";
import WebsiteLayout from "./WebsiteLayout";
import AdminLayout from "./DashboardLayout";
import Dashboard from "src/views/dashboard";
import ForgotEmail from "src/views/auth/ForgotEmail";
import ResetPassword from "src/views/auth/ResetPassword";
import { useSelector } from "react-redux";
import AddEditCareer from "src/views/dashboard/AddEditCareer";
import University from "src/views/dashboard/University";
import AddEditUni from "src/views/dashboard/University/AddEditUni";
import Category from "src/views/dashboard/Category/Category";
import Mail from "src/views/dashboard/Mail";
import Signup from "src/views/auth/signup";
import Users from "src/views/dashboard/Users";
import AboutUs from "src/views/Website/AboutUs";
import FAQ from "src/views/Website/FAQ's";
import TermsAndConditions from "src/views/Website/TermsAndConditions";
import Inspiration from "src/views/dashboard/Inspiration";
import AddEditInspiration from "src/views/dashboard/Inspiration/AddEditInspiration";

export const RoutePaths = {
  LOGIN:
    "/bG9naW4gaXMgc2VjcmV0IGxvZ2luIGlzIHNlY3JldCBsb2dpbiBpcyBzZWNyZXQgbG9naW4gaXMgc2VjcmV0IGxvZ2luIGlzIHNlY3JldCBsb2dpbiBpcyBzZWNyZXQgbG9naW4gaXMgc2VjcmV0IGxvZ2luIGlzIHNlY3JldCBsb2dpbiBpcyBzZWNyZXQg",
};
const Layout = () => {
  const { isLogin = false, user = null } = useSelector(
    (storeState: any) => storeState.auth
  );
  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;
  const IS_ADMIN = loginUser?.role?.type === "ADMIN";
  const ADMIN = user?.user?.role?.type === "ADMIN";

  return (
    <Routes>
      {(isLogin || loginUser) && (IS_ADMIN || ADMIN) ? (
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="career/:id" element={<AddEditCareer />} />
          <Route path="university/" element={<University />} />
          <Route path="university/:id" element={<AddEditUni />} />
          <Route path="category" element={<Category />} />
          <Route path="mails" element={<Mail />} />
          <Route path="users" element={<Users />} />
          <Route path="inspiration" element={<Inspiration />} />
          <Route path="inspiration/:id" element={<AddEditInspiration />} />

          {/* <Route path="category/:id" element={<AddEditUni />} /> */}
        </Route>
      ) : (
        <>
          <Route path="/" element={<WebsiteLayout />}>
            <Route path="" element={<Home />} />
            <Route path="/career/:id" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="terms-conditions" element={<TermsAndConditions />} />
          </Route>

          <Route path="" element={<AuthLayout />}>
            <Route path={RoutePaths.LOGIN} element={<Login />} />
            <Route path={"signup"} element={<Signup />} />
            <Route path="forgor-email" element={<ForgotEmail />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </>
      )}
      <Route
        path="*"
        element={
          <Navigate
            to={
              (isLogin || loginUser) && (IS_ADMIN || ADMIN) ? "/dashboard" : "/"
            }
          />
        }
      />
    </Routes>
  );
};

export default Layout;
