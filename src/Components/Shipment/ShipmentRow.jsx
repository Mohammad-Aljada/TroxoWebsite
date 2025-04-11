/* eslint-disable react/prop-types */
import { StatusBadge } from "./../StatusBadge";
import Menu from "./../Menu/Menu";
import { useState } from "react";
function ShipmentRow({ shipment }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleMenuToggle = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };
  return (
    <div className="grid grid-cols-12  gap-4 items-center  p-4 border-b border-gray-200 w-full">
      <div className="text-sm col-span-3 sm:col-span-2  text-center text-gray-800">
        # {shipment.id}
      </div>
      <div className="text-sm col-span-3 sm:col-span-3  text-center text-gray-800">
        <img
          src={shipment.company}
          alt="Shipping Company"
          className="w-14 h-7 object-contain rounded-md mx-auto"
        />
      </div>
      <div className="text-sm col-span-2 sm:col-span-3  text-center text-gray-800">
        {shipment.address}
      </div>
      <div className="text-sm col-span-2 sm:col-span-2  text-center text-gray-800  ">
        <StatusBadge status={shipment.status} />
      </div>
      <div className="text-sm col-span-2 sm:col-span-2  text-gray-800 text-center  ">
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
      </div>
    </div>
  );
}

export default ShipmentRow;
