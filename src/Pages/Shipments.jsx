import ShipmentForm from "../Components/ShipmentForm";
import ShipmentTable from "../Components/ShipmentTable";
//import ShipmentEmpty from "../Components/ShipmentEmpty";

const Shipments = () => {
  return (
    <div className="ml-5 w-[95%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-end  mt-6">
        <h1 className="text-2xl font-black leading-tight text-gray-800">
          الشحنات
        </h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-neutral-500">
          <ol className="flex flex-row-reverse">
            <li>الرئيسية</li>
            <li aria-hidden="true">&gt;</li>
            <li aria-current="page">الشحنات</li>
          </ol>
        </nav>

        <div className="flex overflow-hidden flex-col self-stretch px-7 py-9 mt-7 bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
          <ShipmentForm />
          <ShipmentTable />
        </div>
      </div>
    </div>
  );
};

export default Shipments;
