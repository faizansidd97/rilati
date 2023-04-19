import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "src/views/Website/Home/Home";
import AuthLayout from "./AuthLayout";
import Login from "src/views/auth/login";
import WebsiteLayout from "./WebsiteLayout";
import AdminLayout from "./DashboardLayout";
import Dashboard from "src/views/dashboard";
import ForgotEmail from "src/views/auth/ForgotEmail";
import ResetPassword from "src/views/auth/ResetPassword";
import { useSelector } from "react-redux";

const Routing = () => {
  const navigate = useNavigate();
  const { isLogin = false } = useSelector((storeState: any) => storeState.auth);

  return (
    <Routes>
      {isLogin ? (
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<WebsiteLayout />}>
            <Route path="" element={<Home />} />
          </Route>

          <Route path="" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="forgor-email" element={<ForgotEmail />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </>
      )}
      <Route
        path="*"
        element={<Navigate to={isLogin ? "/dashboard" : "/"} />}
      />
    </Routes>
  );
};

export default Routing;
