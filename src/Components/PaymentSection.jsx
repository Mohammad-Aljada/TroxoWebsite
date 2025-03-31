
export default function PaymentSection() {
  return (
    <>
      <section className="flex flex-col items-start px-11 py-8 mt-6 w-full tracking-wide bg-white rounded-lg border-2 border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
        <h3 className="text-xl font-bold text-gray-800">طريقة الدفع</h3>
        <div className="flex gap-10 px-12 py-4 mt-7 max-w-full text-base font-semibold whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-200 w-[350px] max-md:px-5">
          <span className="my-auto text-gray-800">الرصيد</span>
          <div className="flex flex-1 text-pink-950">
            <span className="grow my-auto">370</span>
            <img
              src="/images/CurrencyIcone.svg"
              alt=""
              className="object-contain shrink-0 aspect-square w-[27px]"
            />
          </div>
        </div>
      </section>

      <section className="px-16 pt-5 pb-8 mt-6 bg-white rounded-lg border-2 border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <h3 className="self-start text-xl font-bold tracking-wide text-gray-800">
                إعادة شحن الرصيد
              </h3>
              <div className="flex flex-col pl-2.5 mt-2.5">
                <label className="self-start text-lg text-slate-900">
                  أدخل المبلغ الذي تريد تحويله إلى المحفظة
                </label>
                <div className="flex flex-col justify-center items-end px-20 py-3 mt-5 bg-white rounded-lg border border-solid border-neutral-400 max-md:px-5">
                  <img
                    src="/images/CurrencyIcone.svg"
                    alt=""
                    className="object-contain aspect-square w-[27px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <button className="overflow-hidden grow px-16 py-4 mt-20 w-full text-base font-semibold leading-none bg-red-100 rounded-xl text-pink-950 max-md:px-5 max-md:mt-10">
              إعادة شحن الرصيد
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
