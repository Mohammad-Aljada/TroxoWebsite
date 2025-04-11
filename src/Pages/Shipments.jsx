
//import ShipmentEmpty from "../Components/ShipmentEmpty";
import ShipmentForm from './../Components/Shipment/ShipmentForm';
import ShipmentTable from './../Components/Shipment/ShipmentTable';

const Shipments = () => {
  return (
    <div className="mr-5 w-[95%] max-md:mr-0 max-md:w-full" dir="rtl">
      <div className="flex flex-col items-end mt-6 max-md:items-center">
        {/* العنوان وشريط التنقل */}
        <div className="w-full max-w-6xl">
          <h1 className="text-2xl font-black text-gray-800 max-md:text-xl">
            الشحنات
          </h1>
          <nav aria-label="Breadcrumb" className="mt-2">
            <ol className="flex  gap-2 text-sm text-neutral-500">
              <li className="flex items-center">
                <a href="/">الرئيسية</a>
                <span className="mx-2">&gt;</span>
              </li>
              <li aria-current="page" className="font-medium text-gray-700">
                الشحنات
              </li>
            </ol>
          </nav>
        </div>

        {/* محتوى الشحنات */}
        <div className="w-full max-w-6xl mt-7 ml-3 mb-2">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 max-md:p-4">
              <ShipmentForm />
              <div className="mt-6">
                <ShipmentTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipments;
