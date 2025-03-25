import DashboardHeader from "../Components/DashboardHeader";
import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="overflow-hidden  pb-2.5 bg-gray-100">
      <div className="flex  max-md:flex-col">
        <aside
          className={`w-[19%]  max-md:ml-0 max-lg:w-[21%] fixed md:static h-screen bg-white z-50 shadow-lg md:shadow-none transform transition-transform duration-300 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <Sidebar />
        </aside>
        <main className=" w-[81%] max-md:ml-0 max-md:w-full">
          <div className="w-full max-md:max-w-full">
            <DashboardHeader toggleSidebar={toggleSidebar} />
            <Outlet />
          </div>
        </main>
      </div>
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70   z-40 lg:hidden "
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
