// SideBar.js
import { useState } from 'react';
import { NavLink } from 'react-router';

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const menuItems = [
    { icon: "/Icones/StoresIcone.svg", text: "المتاجر", path: "/stores", icone: "/Icones/ArrowRight.svg" },
    { icon: "/Icones/ShipmentsIcone.svg", text: "الشحنات", path: "/shipments", icone: "/Icones/ArrowRight.svg" },
    { icon: "/Icones/WalletIcone.svg", text: "المحفظة", path: "/wallet", icone: "/Icones/ArrowRight.svg" },
    { icon: "/Icones/BillsIcone.svg", text: "فواتيري", path: "/bills" },
    { icon: "/Icones/SuggestedIcone.svg", text: "الاقتراحات", path: "/suggestions" },
    { icon: "/Icones/SettingIcone.svg", text: "الإعدادات", path: "/settings" },
  ];

  return (
    <nav className="overflow-hidden grow pb-20 w-full bg-white shadow-[0px_12px_30px_rgba(80,143,244,0.1)]">
      <div className="flex flex-col justify-center px-14 py-4 bg-slate-50 max-md:px-5">
        <img src="/images/Logo.png" alt="Logo" className="object-contain aspect-[3.66] w-[150px]" />
      </div>
       
      <ul className="flex flex-col items-start px-8 mt-8 w-full text-base text-emerald-900 max-md:px-5">
       
        {/* العنصر الذي يحتوي على "لوحة التحكم" */}
        <div 
          className="flex gap-5 items-center py-4 text-base whitespace-nowrap font-semibold bg-red-100 text-pink-950  pl-8 -ml-8 pr-8" 
          onClick={toggleSubMenu}
        >
          <img src="/Icones/HomeIcone.svg" alt="Home icon" className="object-contain shrink-0 w-5 aspect-square" />
          <NavLink to="/home" className="basis-auto">لوحة التحكم</NavLink>
          <img 
            src="/Icones/ArrowRight.svg" 
            alt="Down arrow icon" 
            className={`object-contain shrink-0 w-5 aspect-square ${showSubMenu ? 'rotate-90' : ''}`} 
          />
        </div>

        {/* القائمة الفرعية */}
        {showSubMenu && (
          <ul className="w-full  pl-8 -ml-8 pr-8">
            <li className="flex items-start justify-start gap-5 py-2">
              <img src="/Icones/StatIcone.png" alt="Statistics icon" className="object-contain shrink-0 my-auto w-5 aspect-square" />
              <NavLink to="/home/statistics">الإحصائيات</NavLink>
            </li>
          </ul>
        )}

        {/* بقية العناصر */}
        {menuItems.map((item, index) => (
          <li key={index} className="flex gap-5 mt-11 whitespace-nowrap max-md:mt-10">
            <img src={item.icon} alt="" className="object-contain shrink-0 my-auto w-5 aspect-square" />
            <NavLink to={item.path}>{item.text}</NavLink>
            {item.icone && (
              <img src={item.icone} alt="Down arrow icon" />
            )}
          </li>
        ))}

        {/* تسجيل الخروج */}
        <li className="flex gap-5 mt-96 text-lg leading-none max-md:mt-10">
          <img src="/Icones/SignOutIcone.svg" alt="Sign out icon" className="object-contain shrink-0 my-auto w-5 aspect-square" />
          <NavLink to="/logout" className="basis-auto">تسجيل الخروج</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;