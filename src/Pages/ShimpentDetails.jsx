import { useState } from "react";
import OrderDetails from "../Components/OrderDetails";
import PaymentSection from "../Components/PaymentSection";
import SuccessShimpentModal from "../Components/Modal/SuccessShimpentModel";

export default function ShipmentDetails() {
  const [showSuccessShipmentModal, setShowSuccessShipmentModal] = useState(false);

  const OnSumbit = (e) => {
    e.preventDefault();
    setShowSuccessShipmentModal(true);
  };
  return (
    <section className="ml-5 w-[95%] max-md:ml-0 max-md:w-full" dir="rtl">
      <div className="flex flex-col items-end  mt-6">
        {/* العنوان والمسار */}
        <div className="w-full px-4 lg:px-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800 uppercase">
            الشحنات
          </h2>
          <nav
            aria-label="مسار الصفحة"
            className="mt-2 text-sm md:text-base lg:text-lg text-neutral-500"
          >
            <ol className="flex items-center space-x-2 rtl:space-x-reverse">
              <li className="hover:text-gray-700">الرئيسية</li>
              <li aria-hidden="true" className="mx-1">
                /
              </li>
              <li className="text-gray-700" aria-current="page">
                الشحنات
              </li>
            </ol>
          </nav>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="w-full mt-6 lg:mt-8 p-6 lg:p-8 xl:p-10 bg-white rounded-xl lg:rounded-2xl shadow-sm">
          {/* عنوان طريقة الشحن */}
          <h3 className="text-center text-lg md:text-xl lg:text-2xl text-zinc-800 mb-6 lg:mb-8">
            يرجى اختيار طريقة الشحن
          </h3>

          {/* أزرار طريقة الشحن */}
          <div className="flex justify-center gap-6 lg:gap-10 mx-auto w-full md:w-4/5 lg:w-3/5 xl:w-2/5 bg-slate-50 rounded-full p-1 lg:p-2">
            <button className="px-8 lg:px-12 py-3 lg:py-4 text-lg lg:text-xl bg-white rounded-full shadow-md text-pink-950 font-medium hover:bg-pink-50 transition-colors">
              شحن المنتجات
            </button>
            <button className="px-6 lg:px-10 py-3 lg:py-4 text-base lg:text-lg text-neutral-600 hover:text-neutral-800 transition-colors">
              الشحن حسب الأبعاد
            </button>
          </div>

          {/* مكونات الطلب والدفع */}
          <div className="mt-8 lg:mt-10">
            <OrderDetails />
            <PaymentSection />
          </div>

          {/* أزرار الإجراءات */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mt-8 lg:mt-10 w-full">
            <button onClick={OnSumbit} className="w-full sm:w-auto px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-red-100 rounded-lg lg:rounded-xl hover:bg-red-200 text-pink-950 transition-colors">
              دفع
            </button>
            <button className="w-full sm:w-auto px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-gray-200 rounded-lg lg:rounded-xl hover:bg-gray-300 text-neutral-600 transition-colors">
              إلغاء الطلب
            </button>
            {showSuccessShipmentModal &&   <SuccessShimpentModal 
                      onClose={() => setShowSuccessShipmentModal(false)}
                    /> }
          </div>
        </div>
      </div>
    </section>
  );
}
