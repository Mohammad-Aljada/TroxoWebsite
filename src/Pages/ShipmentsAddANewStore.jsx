import ShippingForm from "../Components/ShippingForm";

const ShipmentsAddANewStore = () => {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl" dir="rtl">
      <div className="mt-6 w-full">
        <div className="flex  md:flex-row md:flex-wrap-reverse gap-5 justify-between w-full">
          <div className="w-full md:w-auto mb-5">
            <h1 className="text-xl sm:text-2xl font-black leading-tight text-gray-800 uppercase">
              الشحنات
            </h1>
            <nav
              aria-label="breadcrumb"
              className="mt-2  text-sm text-neutral-500"
            >
              الرئيسية&gt; الشحنات
            </nav>
          </div>

          <div className="flex-grow max-w-md mx-auto md:mx-0">
            <div
              className="flex gap-4 px-4 py-2 border border-black border-solid rounded-full"
              role="search"
            >
              <img
                src="/Icones/search.svg"
                alt="بحث"
                className="object-contain w-3.5 aspect-square"
              />
              <input
                type="search"
                placeholder="ابحث عن الشحنة..."
                className="flex-grow text-xs sm:text-sm text-zinc-500 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <ShippingForm />
      </div>
    </div>
  );
};

export default ShipmentsAddANewStore;
