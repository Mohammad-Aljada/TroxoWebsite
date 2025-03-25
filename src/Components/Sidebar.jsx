import { useState } from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showStoresSubMenu, setShowStoresSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleStoresSubMenu = () => {
    setShowStoresSubMenu(!showStoresSubMenu);
  };

  const menuItems = [
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
      path: "/shipments",
      icone: "/Icones/ArrowRight.svg",
    },
    {
      icon: "/Icones/WalletIcone.svg",
      text: "المحفظة",
      path: "/wallet",
      icone: "/Icones/ArrowRight.svg",
    },
    { icon: "/Icones/BillsIcone.svg", text: "فواتيري", path: "/bills" },
    {
      icon: "/Icones/SuggestedIcone.svg",
      text: "الاقتراحات",
      path: "/suggestions",
    },
    { icon: "/Icones/SettingIcone.svg", text: "الإعدادات", path: "/settings" },
  ];

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-pink-950 font-semibold bg-red-100 rounded-lg"
      : "text-emerald-900";

  return (
    <nav className="overflow-hidden grow pb-20 w-full bg-white shadow-[0px_12px_30px_rgba(80,143,244,0.1)]">
      <div className="flex flex-col justify-center px-14 py-4 bg-slate-50 max-md:px-5">
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="object-contain aspect-[3.66] w-[150px]"
        />
      </div>

      <ul className="flex flex-col gap-5 items-start px-8 mt-8 w-full text-base max-md:px-5">
        {/* لوحة التحكم */}
        <div
          className={`flex gap-5 items-center py-4 text-base whitespace-nowrap pl-8 -ml-8 pr-8 w-full ${
            showSubMenu ? "bg-red-100 text-pink-950 font-semibold" : ""
          }`}
          onClick={toggleSubMenu}
        >
          <img
            src="/Icones/HomeIcone.svg"
            alt="Home icon"
            className="object-contain shrink-0 w-5 aspect-square"
          />
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-pink-950 font-semibold" : "text-emerald-900"
            }
          >
            لوحة التحكم
          </NavLink>
          <img
            src="/Icones/ArrowRight.svg"
            alt="Down arrow icon"
            className={`object-contain shrink-0 w-5 aspect-square ${
              showSubMenu ? "rotate-90" : ""
            }`}
          />
        </div>
        {/* القائمة الفرعية */}
        {showSubMenu && (
          <ul className="w-full pl-8 -ml-8 pr-8">
            <li className="flex items-start justify-start gap-5 py-2 w-full">
              <img
                src="/Icones/StatIcone.png"
                alt="Statistics icon"
                className="object-contain shrink-0 my-auto w-5 aspect-square"
              />
              <NavLink to="/home/statistics" className={navLinkClass}>
                الإحصائيات
              </NavLink>
            </li>
          </ul>
        )}

        {/* عنصر المتاجر مع القائمة الفرعية */}
        {menuItems.map((item, index) => (
          <li key={index} className="flex flex-col  w-full">
            <div className="flex items-center">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-start gap-5 w-full px-4 py-2 -mx-4 ${
                    isActive
                      ? "text-pink-950 font-semibold bg-red-100 rounded-lg"
                      : "text-emerald-900"
                  }`
                }
                onClick={
                  item.text === "المتاجر" ? toggleStoresSubMenu : undefined
                }
              >
                <img
                  src={item.icon}
                  alt=""
                  className="object-contain shrink-0 w-5 aspect-square"
                />
                {item.text}
                {item.icone && (
                  <img
                    src={item.icone}
                    alt="Down arrow icon"
                    className={`object-contain shrink-0 w-5 aspect-square ${
                      item.text === "المتاجر" && showStoresSubMenu
                        ? "rotate-90"
                        : ""
                    }`}
                  />
                )}
              </NavLink>
            </div>

            {item.text === "المتاجر" && showStoresSubMenu && item.subMenu && (
              <ul className="w-full ">
                {item.subMenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-start py-2">
                    <img
                      src={subItem.icon}
                      alt=""
                      className="object-contain shrink-0 w-5 aspect-square mr-2"
                    />
                    <NavLink to={subItem.path} className={navLinkClass}>
                      {subItem.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        {/* تسجيل الخروج */}
        <li className="flex gap-5 mt-20 text-lg leading-none w-full max-md:mt-10">
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
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
