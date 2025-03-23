
import StatCard from './../Components/StatCard';
import ProductTable from './../Components/ProductTable';
import SalesChart from './../Components/SalesCart';

const Home = () => {
  return (
 
            <section className="flex flex-col px-8 mt-6 w-full max-md:px-5 max-md:max-w-full">
              <h1 className="self-end text-2xl font-black leading-tight text-gray-800 uppercase">
                لوحة التحكم
              </h1>
              <p className="self-end mt-2 text-sm text-neutral-500">
                الرئيسية
              </p>

              <div className="mt-6 w-full max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <StatCard
                    title="الشحنات شهريًا"
                    value="155"
                    change="+5%"
                    period="مقارنة باليوم السابق"
                    icon="/images/ShippingMonth.svg"
                    borderColor="border-indigo-500"
                    textColor="text-indigo-500"
                  />
                  <StatCard
                    title="الربح"
                    value="32,218"
                    change="5.39%"
                    period="فترة التغيير"
                    icon="/images/Win.svg"
                    borderColor="border-rose-400"
                    textColor="text-rose-400"
                    showCurrency
                  />
                  <StatCard
                    title="إجمالي العملاء"
                    value="298"
                    change="+5%"
                    period="مقارنة باليوم السابق"
                    icon="/images/AllClients.svg"
                    borderColor="border-slate-400"
                    textColor="text-slate-400"
                  />
                </div>
              </div>

              <div className="mt-6 w-full max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <StatCard
                    title="إجمالي الشحنات"
                    value="250"
                    change="5.39%"
                    period="فترة التغيير"
                    icon="/images/AllShipping.svg"
                    borderColor="border-pink-950"
                    textColor="text-pink-950"
                    borderOpacity="border-opacity-60"
                  />
                  <StatCard
                    title="تم الاستلام"
                    value="520"
                    change="5.39%"
                    period="فترة التغيير"
                    icon="/images/DeliveryTime.svg"
                    borderColor="border-orange-500"
                    textColor="text-orange-500"
                  />
                  <StatCard
                    title="مرتجع"
                    value="15"
                    change="6.84%"
                    period="فترة التغيير"
                    icon="/images/Rebot.svg"
                    borderColor="border-neutral-400"
                    textColor="text-neutral-400"
                  />
                </div>
              </div>

              <div className="mt-6 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[68%] max-md:ml-0 max-md:w-full">
                    <ProductTable />
                  </div>
                  <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                    <SalesChart />
                  </div>
                </div>
              </div>
            </section>
       
  );
};

export default Home;
