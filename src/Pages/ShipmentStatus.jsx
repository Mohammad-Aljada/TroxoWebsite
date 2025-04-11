// ShipmentStatus.js
import ShipmentStatusTable from "../Components/Shipment/ShipmentStatusTable";
export const ShipmentStatus = () => {
  return (
    <div
      className="w-full md:w-[90%]  lg:w-[95%]  2xl:w-full 
                  px-2 sm:px-3 md:px-4 lg:px-4 xl:px-6 
                  mx-auto md:mx-0 lg:ml-4 xl:ml-5"
      dir="rtl"
    >
      <div className="flex flex-col items-start mt-6 lg:mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800">
          الشحنات
        </h2>

        {/* Breadcrumb */}
        <nav
          className="mt-2 md:mt-3 text-sm md:text-base text-neutral-500"
          aria-label="breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>الرئيسية</li>
            <li aria-hidden="true">&gt;</li>
            <li className="text-gray-700">الشحنات</li>
          </ol>
        </nav>

        {/* Shipment Table Component */}
        <div className="w-full mt-6 lg:mt-8">
          <ShipmentStatusTable />
        </div>
      </div>
    </div>
  );
};

export default ShipmentStatus;
