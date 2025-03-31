import ShipmentTableRow from "./ShipmentTableRow";
import Button from "./Button";
import { useState } from 'react';

const ShipmentTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const shipmentData = [
    {
      id: 1,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "5",
      price: "646 ريال سعودي"
    },
    {
      id: 2,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "7",
      price: "346 ريال سعودي"
    },
    {
      id: 3,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "15",
      price: "246 ريال سعودي"
    },
    {
      id: 4,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "10",
      price: "146 ريال سعودي"
    }
  ];

  return (
    <section className="flex flex-col p-4 w-full bg-white rounded-lg border border-gray-200" dir="rtl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-gray-800">قائمة طلبات الشحن</h2>
          <time className="text-xs text-gray-500">
            25 مايو 2023، 09:41 مساءً
          </time>
        </div>

        <div className="flex gap-2">
          <Button variant="primary" icon="/Icones/Copy.svg" className="py-1 px-2">
            نسخ
          </Button>
          <div className="flex gap-2">
            <Button variant="primary" icon="/Icones/print2.svg" className="py-1 px-2">
              طباعة
            </Button>
            <Button variant="secondary" icon="/Icones/Download.svg" className="py-1 px-2">
              ملف إكسل
            </Button>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-500">
        <div className="col-span-3 flex items-center gap-2">
          <div className="flex flex-col">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b08270e7e9044626c036e45e2e6db8d0c6597db?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
              alt="Sort ascending"
              className="object-contain aspect-[1.5] w-[9px]"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/406dcb46c879a809157d0af6df319347384fc82e?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
              alt="Sort descending"
              className="object-contain mt-1 aspect-[1.5] w-[9px]"
            />
          </div>
          <img src="/Icones/Profile.svg" alt="عميل" className="w-5 h-5" />
          <span>اسم العميل</span>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <img src="/Icones/box.svg" alt="منتج" className="w-5 h-5" />
          <span>المنتج</span>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <img src="/Icones/Quantity.svg" alt="كمية" className="w-5 h-5" />
          <span>الكمية</span>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <img src="/Icones/price.svg" alt="سعر" className="w-5 h-5" />
          <span>السعر</span>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <span>إجراءات</span>
        </div>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-100">
        {shipmentData.map((shipment) => (
          <div key={shipment.id}>
            <ShipmentTableRow
              customerName={shipment.customerName}
              product={shipment.product}
              quantity={shipment.quantity}
              price={shipment.price}
              highlighted={expandedRow === shipment.id}
              onClick={() => handleRowClick(shipment.id)}
            />
            
            {expandedRow === shipment.id && (
              <div className="p-5 rounded-xl border border-solid bg-slate-50 border-neutral-200 transition-all duration-300">
                <div className="flex justify-between mb-4 flex-wrap gap-4">
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">المتجر</div>
                    <div className="text-base font-semibold text-slate-950">جول الذهبي</div>
                  </div>
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">العميل</div>
                    <div className="text-base font-semibold text-slate-950">{shipment.customerName}</div>
                  </div>
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">منتج</div>
                    <div className="text-base font-semibold text-slate-950">{shipment.product}</div>
                  </div>
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">الكمية</div>
                    <div className="text-base font-semibold text-slate-950">{shipment.quantity} منتجات</div>
                  </div>
                </div>
                <div className="flex justify-between mb-4 flex-wrap gap-4">
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">الارتفاع</div>
                    <div className="text-base font-semibold text-slate-950">12 سم</div>
                  </div>
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">الطول</div>
                    <div className="text-base font-semibold text-slate-950">12 سم</div>
                  </div>
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">العرض</div>
                    <div className="text-base font-semibold text-slate-950">12 سم</div>
                  </div>
                  <div className="flex gap-3 min-w-[200px]">
                    <div className="text-base font-semibold text-zinc-400">الوزن</div>
                    <div className="text-base font-semibold text-slate-950">1 كجم</div>
                  </div>
                </div>
                <button 
                  onClick={() => setExpandedRow(null)}
                  className="flex items-center justify-center w-full mt-2 text-sm text-red-500 hover:text-red-700"
                >
                  إغلاق التفاصيل
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      <Button className="self-center bg-red-100 px-4 md:px-8 py-1 md:py-2 mt-6 md:mt-11 w-full md:w-[260px]">
        تأكيد الطلب
      </Button>
    </section>
  );
};

export default ShipmentTable;