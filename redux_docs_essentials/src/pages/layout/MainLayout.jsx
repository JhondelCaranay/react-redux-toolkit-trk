import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/common";

export const MainLayout = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Outlet />
    </div>
  );
};
