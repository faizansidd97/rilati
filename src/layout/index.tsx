import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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

const Layout = () => {
  const { isLogin = false } = useSelector((storeState: any) => storeState.auth);
  const getUser = localStorage.getItem(Environment.LOCAL_STORAGE_USER_KEY);
  const loginUser = getUser ? JSON.parse(getUser) : null;
  console.log("loginUser", loginUser);

  return (
    <Routes>
      {isLogin || loginUser ? (
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="career/:id" element={<AddEditCareer />} />
          <Route path="university/" element={<University />} />
          <Route path="university/:id" element={<AddEditUni />} />
          <Route path="category" element={<Category />} />
          {/* <Route path="category/:id" element={<AddEditUni />} /> */}
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
        element={<Navigate to={isLogin || loginUser ? "/dashboard" : "/"} />}
      />
    </Routes>
  );
};

export default Layout;
