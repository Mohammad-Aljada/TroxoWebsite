// ShipmentStatus.js

import TicketTable from "./../Components/Ticket/TicketTable";
import TicketModal from "./../Components/Modal/TicketModal";
import { useState } from "react";

export const Ticket = () => {
  const [activeModal, setActiveModal] = useState(false);

  const handleAddTicketClick = () => {
    setActiveModal(true);
  };
  return (
    <div className="w-full px-4 mb-6 md:px-6" dir="rtl">
      <div className="flex flex-col items-start mt-6 lg:mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800">
          تذاكر
        </h2>

        {/* Breadcrumb */}
        <nav
          className="mt-2 md:mt-3 text-sm md:text-base text-neutral-500"
          aria-label="breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>الرئيسية</li>
            <li aria-hidden="true">&gt;</li>
            <li className="">الشحنات</li>
            <li aria-hidden="true" className="px-1">
              &gt;
            </li>
            <li aria-current="page" className="font-medium text-gray-800">
              تذاكر
            </li>
          </ol>
        </nav>

        {/* Tabs */}
        <section className="flex flex-col w-full p-4 mt-6 bg-white rounded-2xl md:p-6">
          <div className="flex flex-row  w-full gap-4 mb-6 max-lg:flex-col max-lg:items-start  items-center justify-between">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
              تذاكر
            </h2>
            {/* Search Box */}
            <div className="relative lg:w-64">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <img
                  src="/Icones/search.svg"
                  className="w-4 h-4"
                  alt="Search icon"
                />
              </div>
              <input
                type="text"
                className="w-full pr-10 text-sm border border-gray-300 rounded-full py-3 px-5 text-right focus:border-black focus:outline-none"
                placeholder="ابحث عن التذكرة..."
              />
            </div>
            <div>
              <button
                onClick={handleAddTicketClick}
                className={`flex items-center cursor-pointer gap-2 px-4 py-2  font-medium text-pink-950 bg-red-100 rounded-lg hover:bg-red-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2`}
                aria-label="إضافة منتج جديد"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="whitespace-nowrap">إضافة تذكرة</span>
              </button>
              {/* عرض المودال عند النقر */}
              {activeModal && (
                <TicketModal onClose={() => setActiveModal(false)} />
              )}
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full mt-4 md:mt-6 overflow-x-auto">
            <div className="min-w-[600px] md:min-w-full">
              <TicketTable />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ticket;
