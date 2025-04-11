/* eslint-disable react/prop-types */
function CustomerTableRow({ customer }) {
  return (
    <div className="grid grid-cols-12  gap-4 items-center  p-4 border-b border-gray-200 w-full">
      <div className="text-sm col-span-3 sm:col-span-2  text-center text-gray-800">
        {customer.id}
      </div>
      <div className="text-sm col-span-3 sm:col-span-2  text-center text-gray-800">
        {customer.name}
      </div>
      <div className="text-sm col-span-2 sm:col-span-2  text-center text-gray-800">
        {customer.phone.split(" ").slice(1).join(" ")}{" "}
        <span className="text-red-400">+966</span>
      </div>
      <div className="text-sm col-span-2 sm:col-span-3  text-center text-gray-800  ">
        {customer.address}
      </div>
      <div className="text-sm col-span-1 sm:col-span-2  text-gray-800 text-center  ">
        {customer.date}
      </div>
      <div className="text-center col-span-1 sm:col-span-1 ">
        <button className="p-1 text-2xl bg-red-100 text-pink-950 hover:bg-red-100 rounded-lg">
          ...
        </button>
      </div>
    </div>
  );
}

export default CustomerTableRow;
