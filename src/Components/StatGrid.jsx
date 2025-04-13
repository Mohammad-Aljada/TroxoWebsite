import StatCardStore from "./StatCardStore";

export default function StatGrid() {
  const stats = [
    {
      title: "المبيعات الصافية",
      value: "4,689.00",
      currency: "/images/CurrencyIcone.svg",
      change: "18.72%",
      icon: "/images/CurrencyIcone.svg",
      isPositive: true,
    },
    {
      title: "تم التوصيل",
      value: "654",
      change: "33.02%",
      icon: "/images/TempIcone.svg",
      isPositive: false,
    },
    {
      title: "الطلبات",
      value: "1422",
      change: "33.02%",
      icon: "/images/DeliveryIcone.svg",
      isPositive: true,
    },
    {
      title: "إجمالي العملاء",
      value: "502",

      change: "33.02%",
      icon: "/images/CustomerIcone.svg",
      isPositive: false,
    },
    {
      title: "أكثر الشركات استخداماً",
      value: "smsa",
      change: "33.02%",
      icon: "/images/DeliveryIcone.svg",
      isPositive: true,
    },
    {
      title: "الشحنات الدولية",
      value: "250",
      change: "18.72%",
      icon: "/images/globe.svg",
      isPositive: true,
    },
    {
      title: "الشحنات المحلية",
      value: "654",
      change: "33.02%",
      icon: "/images/TempIcone.svg",
      isPositive: false,
    },
    {
      title: "أكثر متجر شحن",
      value: "ملابس رياضية",
      change: "33.02%",
      icon: "/images/mostShippe.svg",
      isPositive: false,
    },
  ];

  return (
    <div className="mt-4 w-full lg:w-[75%]">
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <StatCardStore key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}
