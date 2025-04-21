import UserDetails from "../../Components/Users/UserDetails";

function Users() {
  return (
    <div className="w-full px-4 md:px-6 mb-4" dir="rtl">
      <section className="flex flex-col grow items-start mt-10  max-md:max-w-full">
        <h1 className="text-2xl font-black leading-tight text-gray-800 uppercase">
          المستخدمين
        </h1>
        <nav className="mt-2 text-sm text-neutral-500" aria-label="breadcrumb">
          الرئيسية &gt; المستخدمين
        </nav>
        <div className="flex overflow-hidden flex-col self-stretch px-7 pt-5 pb-10 mt-7 w-full bg-white rounded-2xl max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap justify-between max-md:max-w-full">
            <h2 className="text-3xl font-bold tracking-tighter leading-relaxed text-gray-800">
              المستخدمين
            </h2>
          </div>

          <div
            className="flex overflow-hidden  flex-col px-11 pt-10 mt-5 w-full rounded-2xl bg-slate-50 max-md:px-5 max-md:mt-3 max-md:max-w-full"
            dir="ltr"
          >
            <UserDetails
              title="مستخدم - الأول"
              userNumber="U-1234567"
              userName="عبد الحميد"
              wallet="850 ريال سعودي"
              cashOnDelivery="500 ريال سعودي"
              numberStores="5 متاجر"
              numberLocalShipments="33 شحنات"
              numberGlobalShipments="50 شحنات"
              dateLastShipment="2025-05-01"
              amountLastWallet="500"
              currency="/Icones/Currency.svg"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <UserDetails
              title="مستخدم - الثاني"
              userNumber="U-1236567"
              userName="عبد الحميد"
              wallet="850 ريال سعودي"
              cashOnDelivery="500 ريال سعودي"
              numberStores="5 متاجر"
              numberLocalShipments="33 شحنات"
              numberGlobalShipments="50 شحنات"
              dateLastShipment="2025-05-01"
              amountLastWallet="500"
              currency="/Icones/Currency.svg"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
            <UserDetails
              title="مستخدم - الثالث"
              userNumber="U-2234567"
              userName="عبد الحميد"
              wallet="850 ريال سعودي"
              cashOnDelivery="500 ريال سعودي"
              numberStores="5 متاجر"
              numberLocalShipments="33 شحنات"
              numberGlobalShipments="50 شحنات"
              dateLastShipment="2025-05-01"
              amountLastWallet="500"
              currency="/Icones/Currency.svg"
              imageUrl="/Icones/ButtonArrowRight.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Users;
