import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLayout from "../layouts/authLayout";
import MainLayout from "../layouts/mainLayout";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/home/index";
import Login from "../pages/authentication/login/index";
import ForgotPassword from "../pages/authentication/forgotPassword/forgotPassword";
import ResetPassword from "../pages/authentication/forgotPassword/resetPassword";
import Register from "../pages/authentication/registration/index";
import ConfirmEmail from "../pages/authentication/confirmEmail";
import ConfirmEmailSuccess from "../pages/authentication/confirmEmail/confirmEmailSuccess";

function InAppPrivateRoute() {
  const { isLoggedIn, user } = useSelector((state) => state.loginReducer);
  const isAuth = isLoggedIn && user?.token && user?.status;
  return isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />;
}

export default function AppRoute() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/dashboard" element={<InAppPrivateRoute />}>
            <Route path="/dashboard" element={<MainLayout />}>
              {/* <Route index element={<Dashboard />} /> */}
            </Route>
          </Route>

          <Route
            path="/Not-found"
            element={
              <div className="grid grid-cols-1 place-items-center text-base h-screen text-white">
                <div>PAGE NOT FOUND.....</div>
              </div>
            }
          />
          <Route
            path="*"
            element={<Navigate to="/Not-found" replace={true} />}
          />
          <Route element={<AuthLayout />}>
            <Route
              path="/"
              element={
                <div className="bg-[url('/images/mobile-bg.png')] lg:bg-[url('/images/web-bg.png')] bg-no-repeat bg-cover bg-top">
                  <Home />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route
              path="/confirm-email-success"
              element={<ConfirmEmailSuccess />}
            />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* 
            <Route path="/resend-otp" element={<ResendOtp />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} /> */}
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
