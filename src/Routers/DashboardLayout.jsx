import DashboardHeader from "../Components/DashboardHeader";
import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import WelcomeModal from "../Components/Modal/WelcomeModal";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="overflow-hidden pb-2.5 bg-gray-100">
      <div className="flex max-md:flex-col">
        {/* السايدبار المعدل */}
        <aside
          className={`w-[280px] max-md:w-[55%] max-lg:w-[300px] fixed md:static h-screen bg-white z-50 shadow-lg md:shadow-none transform transition-transform duration-300 ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <Sidebar onShipmentsClick={() => setShowWelcomeModal(true)} />
        </aside>

        {/* المحتوى الرئيسي */}
        <main className="flex-1 max-md:ml-0">
          <div className="w-full max-md:max-w-full">
            <DashboardHeader toggleSidebar={toggleSidebar} />
            <Outlet context={{ showWelcomeModal, setShowWelcomeModal }} />
          </div>
        </main>
      </div>

      {/* طبقة التعتيم للجوال */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {showWelcomeModal && (
        <WelcomeModal onClose={() => setShowWelcomeModal(false)} />
      )}
    </div>
  );
};

export default DashboardLayout;
