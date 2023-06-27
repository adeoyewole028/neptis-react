import {  Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="main">
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
