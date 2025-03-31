import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import AlertMessage from "../Components/Alert/AlertMessage";
import { ProductSelector } from "./ProductSelector";
import { NavLink } from 'react-router';

const ShippingForm = () => {
  const [quantity, setQuantity] = useState(0);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8 w-full bg-white rounded-2xl">
      <h2 className="text-lg md:text-xl font-medium text-zinc-800 mb-4 md:mb-6">
        يرجى اختيار طريقة الشحن
      </h2>

      {/* Tabs */}
      <div className="flex w-full max-w-md bg-slate-50 rounded-full p-1 mb-6 md:mb-8">
        <button
          className={`flex-1 py-2 md:py-3 text-sm md:text-base font-bold rounded-full transition-colors ${
            activeTab === "products"
              ? "bg-white text-pink-950 shadow-sm"
              : "text-neutral-600"
          }`}
          onClick={() => setActiveTab("products")}
        >
          شحن المنتجات
        </button>
        <button
          className={`flex-1 py-2 md:py-3 text-sm md:text-base font-bold rounded-full transition-colors ${
            activeTab === "dimensions"
              ? "bg-white text-pink-950 shadow-sm"
              : "text-neutral-600"
          }`}
          onClick={() => setActiveTab("dimensions")}
        >
          الشحن حسب الأبعاد
        </button>
      </div>

      {/* Form Content */}
      <div className="w-full bg-slate-50 rounded-2xl p-4 md:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Column - Form Fields */}
          <div className="w-full lg:w-[50%]">
            <h3 className="text-sm md:text-base font-bold text-zinc-800 mb-4 md:mb-6">
              شحنتك معنا تصل بأمان إلى كل مكان..!!
            </h3>

            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm md:text-base font-semibold text-slate-950 mb-2">
                  المتجر
                </label>
                <DropDownMenu
                  options={["جولدن جول", "عالم الرياضة", "موضة الرياضة"]}
                  placeholder="يرجى اختيار المتجر"
                  icon="/Icones/store.svg"
                  title="المتجر"
                  modalToOpen="store"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-slate-950 mb-2">
                  العميل
                </label>
                <DropDownMenu
                  options={["جولدن جول", "عالم الرياضة", "موضة الرياضة"]}
                  placeholder="يرجى اختيار العميل"
                  icon="/Icones/Profile.svg"
                  title="العميل"
                  modalToOpen="client"
                />
              </div>

              <ProductSelector modalToOpen="product" />
            </div>
          </div>

          {/* Right Column - Info and Actions */}
          <div className="w-full lg:w-[50%] mt-6 lg:mt-0">
            <AlertMessage
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bf562eadfe2d8f765faa1b34a91a054e801906ac?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
              title="رسالة تلميح"
              description="أضف متجرك الآن لعرض تفاصيله الكاملة لعملائنا، بما في ذلك رقم الهاتف والعنوان لسهولة الاتصال والوصول!"
            />

            <div className="mt-6">
              <h4 className="text-sm md:text-base font-semibold text-slate-950 mb-2">
                عميل المتجر
              </h4>
              <div className="w-full p-4 md:p-6 text-center text-sm md:text-base font-semibold bg-gray-100 rounded-2xl text-neutral-400">
                لا توجد تفاصيل متجر لعرضها
              </div>
            </div>
            <div className="mt-6">
  <label className="block text-sm font-semibold text-slate-950 mb-2">الكمية</label>
  <div className="inline-flex px-8 py-4  items-center gap-1 text-lg font-bold bg-white rounded-lg">
    <button
      className="bg-red-50 rounded-lg px-4 py-2"
      onClick={() => setQuantity(Math.max(0, quantity - 1))}
      aria-label="تقليل الكمية"
    >
      -
    </button>
    <span>{quantity}</span>
    <button
      className="bg-red-50 rounded-lg px-4 py-2"
      onClick={() => setQuantity(quantity + 1)}
      aria-label="زيادة الكمية"
    >
      +
    </button>
  </div>
</div>
          
          </div>
          
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <NavLink to ="/home/shipments/details" >
          <button className="px-6 py-3 cursor-pointer md:px-8 md:py-4 text-sm md:text-base font-extrabold bg-red-100 text-pink-950 rounded-xl w-full sm:w-auto min-w-[200px]">
            إضافة شحنة
          </button></NavLink>
        </div>
      </div>
      <button className="px-6 py-3 mt-4 md:px-8 md:py-4 text-sm md:text-base font-extrabold bg-gray-200 text-neutral-500 rounded-xl w-full sm:w-auto min-w-[200px]">
        شركة الشحن
      </button>
    </div>
  );
};

export default ShippingForm;
