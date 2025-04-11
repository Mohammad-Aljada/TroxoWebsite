// ShipmentStatusTable.js
import { Button } from "../Button";
import { StatusBadge } from "../StatusBadge";
import { useState } from "react";
import Menu from "../Menu/Menu";

export const ShipmentStatusTable = () => {
  const shipments = [
    {
      id: "1258",
      company: "/Icones/Company.png",
      address: "جبل النور، السعودية",
      status: "قيد التحضير",
    },
    {
      id: "1668",
      company: "/Icones/Company.png",
      address: "السادة، السعودية",
      status: "مرتجع",
    },
    {
      id: "1785",
      company: "/Icones/Company.png",
      address: "رقمي، السعودية",
      status: "جاهز للاستلام",
    },
    {
      id: "1251",
      company: "/Icones/Company.png",
      address: "جبل النور، السعودية",
      status: "قيد التحضير",
    },
    {
      id: "1663",
      company: "/Icones/Company.png",
      address: "السادة، السعودية",
      status: "مرتجع",
    },
    {
      id: "1784",
      company: "/Icones/Company.png",
      address: "رقمي، السعودية",
      status: "جاهز للاستلام",
    },
  ];

  // نضيف حالة لتتبع الصف المحدد والقائمة المفتوحة
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMenuToggle = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };

  return (
    <section className="w-full p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 bg-white rounded-2xl shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 xl:gap-8 justify-between items-start md:items-center mb-6">
        {/* Tabs and Search */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex bg-slate-50 rounded-full p-1 w-full sm:w-auto">
            <button className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-sm bg-white rounded-full shadow-md text-pink-950 font-medium">
              صفحة الشحنات
            </button>
            <button className="px-4 sm:px-5 md:px-6 py-2 md:py-3 text-xs text-neutral-600">
              صفحة الشحنات الملغاة
            </button>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full w-full sm:w-64 md:w-72 lg:w-80">
            <img
              src="/Icones/search.svg"
                            alt="ابحث عن تصنيف"
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            />
            <input
              type="text"
              placeholder="...ابحث عن تصنيف"
              className="text-sm text-right text-gray-500 bg-transparent outline-none w-full"
              dir="rtl"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
          <Button
            variant="secondary"
            icon="https://cdn.builder.io/api/v1/image/assets/33cf6ee4ee4e4cdd8b24ad2c5832d456/d19776e767cbc9bb9255b105a223d12f9cb67065?placeholderIfAbsent=true"
            className="text-gray-800 border-[#DDE2E4] text-sm sm:text-base md:text-[15px] lg:text-base"
            name="تصفية"
          >
            تصفية
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] md:min-w-full">
          <thead className="bg-rose-200">
            <tr>
              <th className="px-3 sm:px-4 py-3 font-semibold text-center min-w-[100px]">
                اسم الشحن
              </th>
              <th className="px-3 sm:px-4 py-3 font-semibold text-center min-w-[120px]">
                شركة الشحن
              </th>
              <th className="px-3 sm:px-4 py-3 font-semibold text-center min-w-[150px]">
                عنوان العميل
              </th>
              <th className="px-3 sm:px-4 py-3 font-semibold text-center min-w-[120px]">
                حالة الشحنة
              </th>
              <th className="px-3 sm:px-4 py-3 font-semibold text-center min-w-[80px]">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id} className="border-b hover:bg-gray-50">
                <td className="px-3 sm:px-4 py-3 text-center">
                  # {shipment.id}
                </td>
                <td className="px-3 sm:px-4 py-3 text-center">
                  <img
                    src={shipment.company}
                    alt="Shipping Company"
                    className="w-14 h-7 object-contain rounded-md mx-auto"
                  />
                </td>
                <td className="px-3 sm:px-4 py-3 text-center">
                  {shipment.address}
                </td>
                <td className="px-3 sm:px-4 py-3 text-center">
                  <StatusBadge status={shipment.status} />
                </td>
                <td className="px-3 sm:px-4 py-3 text-center relative">
                  <div className="relative inline-block">
                    <button
                      onClick={() => handleMenuToggle(shipment.id)}
                      className="bg-[#FC746C] rounded p-1 hover:bg-[#e05d55] transition-colors"
                    >
                      ...
                    </button>

                    {selectedRow === shipment.id && (
                      <div className="absolute left-2 top-full mt-1 z-50">
                        <Menu onClose={() => setSelectedRow(null)} />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-4 ml-3.5 max-w-full w-[518px]">
        <div className="flex gap-6 text-sm leading-none text-black">
          <div className="my-auto basis-auto">عدد الصفوف في كل صفحة:</div>
          <select className="px-3 py-1 ml-2 border border-gray-300 rounded">
           <option value="10">10</option>
           <option value="20">20</option> 
           <option value="30">30</option>
         </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded text-gray-700 ">
          <img src="/Icones/ArrowRight.svg" alt="arrow right"  className="w-4"/>
          </button>
          <button className="px-3 py-1 rounded bg-gray-100  font-medium">
            1
          </button>
          <button className="px-3 py-1 rounded  text-gray-700 ">
          <img src="/Icones/ArrowLeft.svg" alt="arrow left"  className="w-4"/>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ShipmentStatusTable;
