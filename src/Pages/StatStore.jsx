import StatGrid from "./../Components/StatGrid";
// import ProductTable from "./../Components/ProductTable";
// import CityChart from "./../Components/CityChart";

export default function StatStore() {
  return (
    <main className="overflow-hidden pb-10 bg-gray-100">
      <section className="ml-5  max-md:ml-0 max-md:w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between mt-6 mr-7 ml-8 w-full max-w-[1111px] max-md:mr-2.5 max-md:max-w-full">
            <button
              className="flex overflow-hidden gap-1.5 px-6 py-2 my-auto text-base font-bold tracking-tight leading-none text-center bg-red-100 rounded-lg text-pink-950"
              aria-label="Export file"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b6acb5c4f6f19bf5703d6fcac436f04cd319295?placeholderIfAbsent=true&apiKey=e1766207373343d5b51643e9485c07fc"
                alt=""
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <span>ملف التصدير</span>
            </button>
            <div className="flex flex-col gap-2 items-center mr-20">
              <h1 className="text-2xl font-black leading-tight text-gray-800">
                لوحة التحكم
              </h1>
              <nav
                className="mt-2  text-sm text-neutral-500"
                aria-label="Breadcrumb"
              >
                الرئيسية &gt; الإحصائيات
              </nav>
            </div>
          </div>
          <section className="flex flex-col px-7 pt-3.5 pb-10 mx-7 mt-6 bg-white rounded-2xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <h2 className="self-end text-3xl font-bold tracking-tighter leading-relaxed text-gray-800">
              إحصائيات المتجر
            </h2>
            <StatGrid />
            {/* <div className="mt-10 w-full max-w-full px-4 sm:px-6 md:px-8">
              <div className="flex gap-5 sm:gap-4 md:gap-5 max-lg:flex-col max-md:gap-3 lg:gap-3">
                <ProductTable className="w-full lg:w-full " />
                <CityChart className="w-full lg:w-full" />
              </div>
            </div> */}
          </section>
        </div>
      </section>
    </main>
  );
}
