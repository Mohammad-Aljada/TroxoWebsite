import { FilterButton } from "../ActionButtons";
import { useState } from "react";
import MenuBills from "../Menu/MenuBills";

export default function InvoicesTable() {
  const invoices = [
    {
      id: "#125758",
      store: "جولدن جول",
      customer: "مشاري الذبياني",
      date: "12-03-2024",
      price: "646",
    },
    {
      id: "#128547",
      store: "جولدن جول",
      customer: "أحمد أحمد",
      date: "22-03-2024",
      price: "646",
    },
    {
      id: "#125760",
      store: "جولدن جول",
      customer: "مشاري الذبياني",
      date: "12-03-2024",
      price: "646",
    },
    {
      id: "#128550",
      store: "جولدن جول",
      customer: "أحمد أحمد",
      date: "22-03-2024",
      price: "646",
    },
    {
      id: "#125759",
      store: "جولدن جول",
      customer: "مشاري الذبياني",
      date: "12-03-2024",
      price: "646",
    },
  ];
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMenuToggle = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };

  return (
    <section className="flex flex-col mb-4 w-full p-4 mt-2 bg-white rounded-2xl md:p-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
          فواتيري
        </h2>

        <div className="w-full flex flex-col-reverse justify-between lg:flex-row gap-4 items-end max-md:items-start">
          {/* Search Box */}
          <div className="relative w-full max-md:w-[300px] lg:w-64">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img src="/Icones/search.svg" className="w-4 h-4" alt="بحث" />
            </div>
            <input
              type="text"
              className="w-full pr-10 text-sm border border-gray-300 rounded-full py-2 px-4 text-right focus:border-black focus:outline-none"
              placeholder="ابحث عن العميل..."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end max-md:justify-start">
            <FilterButton />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full  ">
            <thead>
              <tr className="bg-red-100 text-center">
                <th className="px-3 py-3 text-sm lg:text-base font-semibold text-zinc-800 ">
                  رقم الفاتورة
                </th>
                <th className="px-3 py-3 text-sm lg:text-base font-semibold text-zinc-800 ">
                  <div className="flex max-md:flex-col max-md:gap-1 items-center justify-center gap-2">
                    <img
                      src="/Icones/store.svg"
                      alt="متجر"
                      className="w-4 h-4"
                    />
                    <span>اسم المتجر</span>
                  </div>
                </th>
                <th className="px-3 py-3 text-sm lg:text-base font-semibold text-zinc-800 ">
                  <div className="flex max-md:flex-col max-md:gap-1 items-center justify-center gap-2">
                    <img
                      src="/Icones/Profile.svg"
                      alt="عميل"
                      className="w-4 h-4"
                    />
                    <span>اسم العميل</span>
                  </div>
                </th>
              
                <th className="px-3 py-3 text-sm lg:text-base font-semibold text-zinc-800 ">
                  <div className="flex max-md:flex-col max-md:gap-1 items-center justify-center gap-2">
                    <img
                      src="/Icones/Calender.svg"
                      alt="تاريخ"
                      className="w-4 h-4"
                    />
                    <span>تاريخ الطلب</span>
                  </div>
                </th>
                <th className="px-3 py-3 text-sm lg:text-base font-semibold text-zinc-800 ">
                  <div className="flex max-md:flex-col max-md:gap-1 items-center justify-center gap-2">
                    <img
                      src="/Icones/price.svg"
                      alt="سعر"
                      className="w-4 h-4"
                    />
                    <span>السعر</span>
                  </div>
                </th>
                <th className="px-3 py-3 text-sm lg:text-base font-semibold text-zinc-800 "></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm text-blue-950 text-center">
                    {invoice.id}
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-950 text-center">
                    {invoice.store}
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-950 text-center">
                    {invoice.customer}
                  </td>
                
                  <td className="px-3 py-3 text-sm text-blue-950 text-center">
                    {invoice.date}
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-950">
                    <div className="flex items-center justify-center gap-1">
                      <span>{invoice.price}</span>
                      <img
                        src="/Icones/Currency.svg"
                        alt="عملة"
                        className="w-4 h-4"
                      />
                    </div>
                  </td>
                  <td className="px-3 py-3 text-sm text-blue-950 relative">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleMenuToggle(invoice.id)}
                        className="p-1 text-xl bg-[#FC746C] text-white hover:bg-red-500 rounded-lg transition-colors"
                      >
                        ...
                      </button>
                      {selectedRow === invoice.id && (
                        <div className="absolute left-8 top-[75%] mt-1 z-50">
                          <MenuBills onClose={() => setSelectedRow(null)} />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
