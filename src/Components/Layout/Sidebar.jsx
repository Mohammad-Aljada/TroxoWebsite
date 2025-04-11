import { useState } from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const menuItems = [
    {
      icon: "/Icones/HomeIcone.svg",
      text: "لوحة التحكم",
      path: "/home",
      icone: "/Icones/ArrowRight.svg",
      subMenu: [
        {
          icon: "/Icones/StatIcone.png",
          text: "احصائيات",
          path: "/home/statistics",
        },
      ],
    },

    {
      icon: "/Icones/StoresIcone.svg",
      text: "المتاجر",
      path: "/home/stores",
      icone: "/Icones/ArrowRight.svg",
      subMenu: [
        {
          icon: "/Icones/StatIcone.png",
          text: "المنتج",
          path: "/home/stores/product",
        },
        {
          icon: "/Icones/StatIcone.png",
          text: "التصنيفات",
          path: "/home/stores/classification",
        },
      ],
    },
    {
      icon: "/Icones/ShipmentsIcone.svg",
      text: "الشحنات",
      path: "/home/shipments/shipmentstatus",
      icone: "/Icones/ArrowRight.svg",
      subMenu: [
        {
          icon: "/Icones/StatIcone.png",
          text: "العميل",
          path: "/home/shipments/customer",
        },
      ],
    },
    {
      icon: "/Icones/WalletIcone.svg",
      text: "المحفظة",
      path: "/home/wallet",
      icone: "/Icones/ArrowRight.svg",
    },
    { icon: "/Icones/BillsIcone.svg", text: "فواتيري", path: "/home/bills" },
    {
      icon: "/Icones/SuggestedIcone.svg",
      text: "الاقتراحات",
      path: "/suggestions",
    },
    { icon: "/Icones/SettingIcone.svg", text: "الإعدادات", path: "/settings" },
  ];

  return (
    <nav className="flex flex-col h-full bg-white shadow-[0px_12px_30px_rgba(80,143,244,0.1)]">
      {/* قسم الشعار */}
      <div className="flex-shrink-0 px-14 py-4 bg-slate-50 max-md:px-5">
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="object-contain aspect-[3.66] w-[150px]"
        />
      </div>

      {/* القائمة الرئيسية مع إمكانية التمرير */}
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-5 items-start px-8 mt-8 w-full text-base max-md:px-5 pb-4">
          {/* العناصر الرئيسية */}
          {menuItems.map((item, index) => (
            <li key={index} className="flex flex-col -ml-1 w-full">
              <div className="flex items-center">
                <NavLink
                  end
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-start gap-5 w-full px-4 py-2 -mx-4 ${
                      isActive
                        ? "text-pink-950 font-semibold bg-red-100 rounded-lg"
                        : "text-emerald-900"
                    }`
                  }
                  onClick={() => {
                    if (item.subMenu) toggleMenu(item.text);
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="object-contain shrink-0 w-5 aspect-square"
                  />
                  {item.text}
                  {item.icone && (
                    <img
                      src={item.icone}
                      alt="Down arrow icon"
                      className={`object-contain shrink-0 w-5 aspect-square ${
                        openMenus[item.text] ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </NavLink>
              </div>

              {item.subMenu && openMenus[item.text] && (
                <ul className="mt-1 space-y-1">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.path}>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-lg text-sm ${
                            isActive
                              ? "bg-red-100 text-pink-950"
                              : "text-gray-600 hover:bg-gray-100"
                          }`
                        }
                      >
                        <img
                          src={subItem.icon}
                          alt={subItem.text}
                          className="object-contain shrink-0 w-5 aspect-square"
                        />
                        {subItem.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* قسم تسجيل الخروج (ثابت في الأسفل) */}
      <div className="flex-shrink-0 px-8 pb-6 max-md:px-5">
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `flex items-center gap-5 w-full px-4 py-2 -mx-4 ${
              isActive
                ? "text-pink-950 font-semibold bg-red-100 rounded-lg"
                : "text-emerald-900"
            }`
          }
        >
          <img
            src="/Icones/SignOutIcone.svg"
            alt="Sign out icon"
            className="object-contain shrink-0 w-5 aspect-square"
          />
          تسجيل الخروج
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
