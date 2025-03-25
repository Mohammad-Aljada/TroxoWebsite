import { FilterButton, ExcelButton, AddProductButton } from "./ActionButtons";

const productData = [
  {
    id: "P-12345",
    name: "أحذية رياضية",
    length: "25 سم",
    weight: "0.5 كغ",
    height: "15 سم",
    width: "20 سم",
    price: "250 ر.س",
    quantity: "25",
  },
  {
    id: "P-67890",
    name: "عدة رياضية",
    length: "35 سم",
    weight: "1.0 كغ",
    height: "25 سم",
    width: "30 سم",
    price: "150 ر.س",
    quantity: "15",
  },
  {
    id: "P-13579",
    name: "قبعة رياضية",
    length: "50 سم",
    weight: "0.3 كغ",
    height: "23 سم",
    width: "15 سم",
    price: "300 ر.س",
    quantity: "150",
  },
  {
    id: "P-12345",
    name: "أحذية رياضية",
    length: "25 سم",
    weight: "0.5 كغ",
    height: "15 سم",
    width: "20 سم",
    price: "250 ر.س",
    quantity: "25",
  },
  {
    id: "P-67890",
    name: "عدة رياضية",
    length: "35 سم",
    weight: "1.0 كغ",
    height: "25 سم",
    width: "30 سم",
    price: "150 ر.س",
    quantity: "15",
  },
  {
    id: "P-13579",
    name: "قبعة رياضية",
    length: "50 سم",
    weight: "0.3 كغ",
    height: "23 سم",
    width: "15 سم",
    price: "300 ر.س",
    quantity: "150",
  },
  {
    id: "P-12345",
    name: "أحذية رياضية",
    length: "25 سم",
    weight: "0.5 كغ",
    height: "15 سم",
    width: "20 سم",
    price: "250 ر.س",
    quantity: "25",
  },
  {
    id: "P-67890",
    name: "عدة رياضية",
    length: "35 سم",
    weight: "1.0 كغ",
    height: "25 سم",
    width: "30 سم",
    price: "150 ر.س",
    quantity: "15",
  },
];

export const ProductList = () => {
  return (
    <section className="flex flex-col px-7 py-5 mt-7 w-full bg-white rounded-2xl max-md:px-5">
      {/* Header Section */}
      <div className="flex flex-wrap flex-row-reverse justify-between items-center w-full gap-4 mb-6">
        <div className="flex flex-row-reverse items-center gap-4">
          <h2 className="text-2xl  font-bold text-gray-800">المنتجات</h2>
          <div className="flex items-center gap-2 flex-row-reverse px-4 py-2 border border-gray-300 rounded-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/927f879410be1cceca35e9ec4d49b92866ee320f?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
              alt="ابحث عن المنتج"
              className="object-contain w-3.5 aspect-square"
            />
            <input
              type="text"
              placeholder="...ابحث عن المنتج"
              className="text-sm text-right text-gray-500 bg-transparent outline-none w-40"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <FilterButton />
            <ExcelButton />
          </div>
          <AddProductButton />
        </div>
      </div>

      {/* Info Message */}
      <p className="text-sm text-right text-pink-700 mb-6">
        .تتيح لك تروكسو حفظ منتجاتك لتسهيل إدارة الشحنات. لضمان دقة حساب تكاليف
        الشحن، يرجى الحرص على دقة إدخال الأبعاد ووزن المنتج
      </p>

      {/* Products Table - Horizontal Layout */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-100 text-gray-700 font-semibold">
              <th className="p-3 w-12 text-center">#</th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/box.svg"
                    alt="product icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>اسم المنتج</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/length.svg"
                    alt="length icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>الطول</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/weight.svg"
                    alt="weight icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>الوزن</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/height.svg"
                    alt="height icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>الارتفاع</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/width.svg"
                    alt="width icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>العرض</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/price.svg"
                    alt="price icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>السعر</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/Quantity.svg"
                    alt="quantity icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>الكمية</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px] text-center"></th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3 font-medium text-center ">{product.name}</td>
                <td className="p-3 text-center">{product.length}</td>
                <td className="p-3 text-center">{product.weight}</td>
                <td className="p-3 text-center">{product.height}</td>
                <td className="p-3 text-center">{product.width}</td>
                <td className="p-3 font-medium text-center ">
                  {product.price}
                </td>
                <td className="p-3 text-center">{product.quantity}</td>
                <td className="p-3 text-center">
                  <div className="flex gap-2">
                    <button className="px-3 py-1  bg-red-100">
                      <img
                        src="/Icones/subMenu.svg"
                        alt="menu icon"
                        className="w-5 h-5 object-contain"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          <span>عرض</span>
          <select className="px-3 py-1 ml-2 border border-gray-300 rounded">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
          <span> عدد الصفوف لكل صفحة</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
            السابق
          </button>
          <button className="px-3 py-1 rounded bg-red-100 text-red-700 font-medium">
            1
          </button>
          <button className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">
            التالي
          </button>
        </div>
      </div>
    </section>
  );
};
