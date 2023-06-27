import { Outlet } from "react-router-dom";

const MainLayout = () => {
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

export default MainLayout;
