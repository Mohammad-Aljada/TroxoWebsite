/* eslint-disable react/prop-types */
import { useState } from "react";
const FormSection = ({ label, children, required }) => (
  <div className="flex flex-col w-full">
    <div className="flex gap-2 self-start">
      <label className="text-sm md:text-base font-semibold text-slate-950">
        {label}
      </label>
      {required && <span className="text-sm text-red-600">*</span>}
    </div>
    {children}
  </div>
);

const ShipmentForm = () => {
  const [activeDetails, setActiveDetails] = useState(null); // يمكن أن تكون 'store' أو 'client' أو null

  const toggleDetails = (type) => {
    setActiveDetails(activeDetails === type ? null : type);
  };
  return (
    <section
      className="flex flex-col p-4 md:p-5 w-full rounded-xl bg-slate-50"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <h2 className="text-base md:text-lg text-zinc-800">
          شحنتك معنا تصل بأمان إلى كل مكان..!!
        </h2>
      </div>

      {/* Store Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
        {/* Store Info */}
        <div className="space-y-2">
          <label className="text-sm md:text-base text-zinc-400">المتجر</label>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-400">
            <div className="flex items-center gap-3">
              <img
                src="/Icones/StoresIcone.svg"
                alt="store"
                className="w-5 h-5 md:w-6 md:h-6"
              />
              <span className="text-slate-950">جولدن جول</span>
            </div>
            <img
              src="/images/AarrowDown.svg"
              alt="arrow"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </div>

        {/* Store Details */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <h3 className="text-sm md:text-base font-semibold text-slate-950 opacity-80">
              تفاصيل المتجر
            </h3>
            <button
              onClick={() => toggleDetails("store")}
              className="p-2 w-10 h-10 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors"
            >
              <img
                src="/Icones/ArrowRight.svg"
                alt="arrow right"
                className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                  activeDetails === "store" ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
          {activeDetails === "store" && (
            <div className="grid grid-cols-2 gap-3 p-4 bg-red-50 rounded-2xl">
              {/* محتوى تفاصيل المتجر */}
              <div className="flex items-center gap-2">
                <img
                  src="/Icones/Location.svg"
                  alt="location"
                  className="w-5 h-5"
                />
                <span className="text-sm md:text-base">العنوان</span>
              </div>
              <p className="text-sm md:text-base text-gray-500">
                حي بدر، الدمام، المملكة العربية السعودية
              </p>
              <div className="flex items-center gap-2">
                <img src="/Icones/phone.svg" alt="phone" className="w-5 h-5" />
                <span className="text-sm md:text-base">هاتف المتجر</span>
              </div>
              <p className="text-sm md:text-base text-gray-500">
                +966 50 000 0000
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Customer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
        {/* Customer Info */}
        <div className="space-y-2">
          <label className="text-sm md:text-base text-zinc-400">العميل</label>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-400">
            <div className="flex items-center gap-3">
              <img
                src="/Icones/Profile.svg"
                alt="profile"
                className="w-6 h-6 md:w-7 md:h-7"
              />
              <span className="text-slate-950">مشاري الذبياني</span>
            </div>
            <img
              src="/images/AarrowDown.svg"
              alt="arrow"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </div>

        {/* Customer Details */}
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <h3 className="text-sm md:text-base font-semibold text-slate-950 opacity-80">
              تفاصيل العميل
            </h3>
            <button
              onClick={() => toggleDetails("client")}
              className="p-2 w-10 h-10 rounded-lg bg-gray-200/30 hover:bg-gray-200/50 transition-colors"
            >
              <img
                src="/Icones/ArrowRight.svg"
                alt="arrow right"
                className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ${
                  activeDetails === "client" ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>

          {activeDetails === "client" && (
            <div className="grid grid-cols-2 gap-3 p-4 bg-red-50 rounded-2xl">
              {/* محتوى تفاصيل العميل */}
              <div className="flex items-center gap-2">
                <img
                  src="/Icones/Location.svg"
                  alt="location"
                  className="w-5 h-5"
                />
                <span className="text-sm md:text-base">العنوان</span>
              </div>
              <p className="text-sm md:text-base text-gray-500">
                حي النخيل، الرياض، المملكة العربية السعودية
              </p>
              <div className="flex items-center gap-2">
                <img src="/Icones/phone.svg" alt="phone" className="w-5 h-5" />
                <span className="text-sm md:text-base">الهاتف المحمول</span>
              </div>
              <p className="text-sm md:text-base text-gray-500">
                +966 55 123 4567
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
        {/* Product */}
        <FormSection label="المنتج" required>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-400">
            <div className="flex items-center gap-3">
              <img
                src="/Icones/box.svg"
                alt="product"
                className="w-6 h-6 md:w-7 md:h-7"
              />
              <span className="text-slate-950">طقم رياضي</span>
            </div>
            <img
              src="/images/AarrowDown.svg"
              alt="arrow"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </FormSection>

        {/* Quantity */}
        <FormSection label="الكمية">
          <div className="flex justify-between items-center p-2 bg-white rounded-lg border border-neutral-400">
            <button
              className="flex justify-center items-center w-7 h-7 bg-red-50 rounded-lg"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="text-lg md:text-xl font-bold">3</span>
            <button
              className="flex justify-center items-center w-7 h-7 bg-red-50 rounded-lg"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </FormSection>

        {/* Pickup */}
        <FormSection label="التقاط">
          <div className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              id="pickup"
              className="w-5 h-5 bg-white rounded border border-neutral-400"
            />
            <label
              htmlFor="pickup"
              className="text-sm md:text-base text-gray-500"
            >
              استلام الشحنة من المرسل
            </label>
          </div>
        </FormSection>
      </div>

      {/* Shipment Details */}
      <h3 className="mt-6 md:mt-8 text-base md:text-lg text-zinc-800">
        تفاصيل الشحنة (الطول، الارتفاع، العرض)
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
        {/* Length */}
        <FormSection label="الطول (سم)">
          <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400">
            <img src="/Icones/length.svg" alt="length" className="w-5 h-5" />
            <input
              type="number"
              placeholder="ادخل الطول"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </FormSection>

        {/* Height */}
        <FormSection label="الارتفاع (سم)">
          <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400">
            <img src="/Icones/height.svg" alt="height" className="w-5 h-5" />
            <input
              type="number"
              placeholder="ادخل الارتفاع"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </FormSection>

        {/* Width */}
        <FormSection label="العرض (سم)">
          <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400">
            <img src="/Icones/width.svg" alt="width" className="w-5 h-5" />
            <input
              type="number"
              placeholder="ادخل العرض"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </FormSection>

        {/* Weight */}
        <FormSection label="الوزن (كجم)">
          <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-neutral-400">
            <img src="/Icones/weight.svg" alt="weight" className="w-5 h-5" />
            <input
              type="number"
              placeholder="ادخل الوزن"
              className="w-full bg-transparent outline-none"
            />
          </div>
        </FormSection>
      </div>

      {/* Shipping Type */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
        {/* Shipment Type */}
        <FormSection label="نوع الشحنة" required>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-400">
            <span className="text-zinc-400">نوع الشحنة</span>
            <img
              src="/images/AarrowDown.svg"
              alt="arrow"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </FormSection>

        {/* Shipping Company */}
        <FormSection label="شركة الشحن" required>
          <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-400">
            <div className="flex items-center gap-3">
              <img
                src="/Icones/ShipmentsIcone.svg"
                alt="shipping"
                className="w-5 h-5"
              />
              <span className="text-zinc-400">SMSA</span>
            </div>
            <img
              src="/images/AarrowDown.svg"
              alt="arrow"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </FormSection>

        {/* Service Type */}
        <FormSection label="نوع الخدمة">
          <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-400">
            <span className="text-zinc-400">الدفع عند الاستلام</span>
            <img
              src="/images/AarrowDown.svg"
              alt="arrow"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </FormSection>
      </div>
      <button className="px-4 py-2 self-center mt-4 cursor-pointer md:px-6 md:py-4 text-sm md:text-base font-extrabold bg-red-100 text-pink-950 rounded-xl w-full sm:w-auto min-w-[200px]">
        إضافة شحنة
      </button>
    </section>
  );
};

export default ShipmentForm;
