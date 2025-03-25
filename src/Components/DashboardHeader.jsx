import { useState, useRef, useEffect } from "react";
import NotificationsPanel from "../Components/Notifications/NotificationsPanel";
import SettingsMenu from "../Components/Settings/SettingsMenu"; // تأكد من المسار الصحيح

const DashboardHeader = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const notificationsRef = useRef(null);
  const settingsRef = useRef(null);

  // إغلاق لوحة الإشعارات عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSettings(false); // إغلاق قائمة الإعدادات إذا كانت مفتوحة
  };

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
    setShowNotifications(false);
  };
  return (
    <header className="flex flex-wrap gap-5 justify-between items-center py-5 px-4 w-full bg-red-100 max-lg:flex-col max-md:px-3">
      {/* Section 1: الترحيب وشريط البحث */}
      <div className="flex flex-wrap items-center gap-8 text-pink-950 max-lg:w-full max-lg:justify-between">
        <div className="flex justify-center items-center gap-8 max-lg:items-start">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <img src="/Icones/MenuIcone.svg" alt="Menu" className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-extrabold leading-none">مرحبًا</h2>
          <p className="text-base leading-6">
            عبد الله <br /> #1255
          </p>
        </div>
        <div className="flex items-center gap-4 px-5 py-3 text-xs border border-solid border-pink-950 rounded-[30px] max-lg:w-full">
          <img
            src="/images/SearchIcone.svg"
            alt="Search"
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <input
            type="search"
            placeholder="ابحث هنا..."
            className="w-full bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Section 2: الأزرار */}
      <div className="flex items-center gap-4 text-center text-pink-950 max-lg:w-full max-lg:justify-center max-lg:mt-4">
        <button className="flex flex-col justify-center items-center px-2 py-1 bg-opacity-10 rounded-lg shadow-md border border-solid border-pink-950">
          <span className="py-2 px-5 rounded-lg">إضافة شحنة</span>
        </button>
        <button className="flex flex-col justify-center items-center px-2 py-1 bg-opacity-10 rounded-lg shadow-md border border-solid border-pink-950">
          <span className="py-2 px-5 rounded-lg">إضافة رصيد</span>
        </button>
      </div>

      {/* Section 3: الإشعارات وصورة الملف الشخصي */}
      <div className="flex items-center gap-4 max-lg:w-full max-lg:justify-end max-lg:mt-4">
        {/* زر الإشعارات مع لوحة الإشعارات */}
        <div className="relative" ref={notificationsRef}>
          <button
            aria-label="Notifications"
            onClick={toggleNotifications}
            className="focus:outline-none cursor-pointer"
          >
            <img
              src="/images/Notification.svg"
              alt="Notifications"
              className="w-5 aspect-square"
            />
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 z-50">
              <NotificationsPanel />
            </div>
          )}
        </div>

        {/* زر اللغة */}
        <button aria-label="World">
          <img
            src="/Icones/worldIcone.svg"
            alt="world icon"
            className="w-5 aspect-square"
          />
        </button>

        {/* صورة الملف الشخصي مع قائمة الإعدادات */}
        <div className="relative" ref={settingsRef}>
          <button
            onClick={toggleSettings}
            aria-label="User profile"
            className="focus:outline-none cursor-pointer"
          >
            <img
              src="/images/profileImage.png"
              alt="User profile"
              className="w-10 rounded-lg aspect-square hover:opacity-80 transition-opacity"
            />
          </button>
          {showSettings && (
            <div className="absolute right-0 mt-2 z-[100]">
              <SettingsMenu />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
