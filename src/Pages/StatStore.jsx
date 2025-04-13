import StatGrid from "./../Components/StatGrid";
// import ProductTable from "./../Components/ProductTable";
// import CityChart from "./../Components/CityChart";

export default function StatStore() {
  return (
    <section className="w-full mb-6 px-4 md:px-6">
      <div className="w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-w-[1111px] max-md:mr-2.5 max-md:max-w-full">
          <div className="flex flex-col gap-2 items-center mr-10">
            <h1 className="text-2xl font-black leading-tight text-gray-800">
              الاحصائيات
            </h1>
            <nav
              className="mt-2  text-sm text-neutral-500"
              aria-label="Breadcrumb"
            >
              الرئيسية &gt; إحصائيات متجر
            </nav>
          </div>
          <button
            className="flex overflow-hidden items-center gap-1.5 px-6 py-2 my-auto text-base font-bold tracking-tight leading-none text-center bg-red-100 rounded-lg text-pink-950"
            aria-label="Export file"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b6acb5c4f6f19bf5703d6fcac436f04cd319295?placeholderIfAbsent=true&apiKey=e1766207373343d5b51643e9485c07fc"
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <span>ملف التصدير</span>
          </button>
        </div>
        <section className="flex flex-col pb-10 pr-10 pt-5 mx-5 mt-6 bg-white rounded-2xl max-md:px-5 max-md:mr-2.5 w-full">
          <h2 className="self-start text-2xl font-bold tracking-tighter leading-relaxed text-gray-800">
            إحصائيات المتجر
          </h2>
          <StatGrid />
        </section>
      </div>
    </section>
  );
}
