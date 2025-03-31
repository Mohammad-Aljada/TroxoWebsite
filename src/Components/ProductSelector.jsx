import { useState } from "react";
import AddProductModal from './Modal/AddProductModal';

export const ProductSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showSubDropdown, setShowSubDropdown] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleAddNew = () => {
    setIsOpen(false);
    setIsProductModalOpen(true);
  };

  const products = [
    {
      id: 1,
      name: "عدة رياضية",
      subItems: [
        { id: 11, name: "عدة رياضية", quantity: "5 منتجات" },
        { id: 12, name: "عدة رياضية", quantity: "3 منتجات" },
      ],
    },
    { id: 2, name: "أحذية رياضية" },
    { id: 3, name: "عدة رياضية" },
  ];

  const toggleProduct = (product) => {
    setSelectedProducts((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const toggleSubDropdown = (productId, e) => {
    e.stopPropagation();
    setShowSubDropdown(showSubDropdown === productId ? null : productId);
  };

  const selectSubItem = (product, subItem, e) => {
    e.stopPropagation();
    setSelectedProducts((prev) => [
      ...prev.filter((p) => p.id !== product.id),
      { ...product, selectedSubItem: subItem },
    ]);
    setShowSubDropdown(null);
  };

  return (
    <div className="relative w-full">
      <div className="flex gap-2 items-center mb-2">
        <label className="text-sm sm:text-base font-semibold text-slate-950">
          المنتج
        </label>
        <span className="text-xs sm:text-sm text-red-600">*</span>
      </div>

      <button
        className="flex justify-between items-center w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-semibold bg-white rounded-lg border border-neutral-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <img src="/Icones/box.svg" alt="Box" className="w-6 h-6" />
          <span className="text-zinc-400">يرجى اختيار المنتج</span> 
        </div>
      
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          {products.map((product) => (
            <div key={product.id} className="relative">
              <div
                className="flex items-center p-3 hover:bg-slate-50 cursor-pointer"
                onClick={() => toggleProduct(product)}
              >
                <input
                  type="checkbox"
                  checked={selectedProducts.some((p) => p.id === product.id)}
                  readOnly
                  className="mr-3 h-4 w-4 text-indigo-600 rounded border-gray-300"
                />
                <span className="text-slate-950">{product.name}</span>

                {product.subItems && (
                  <button
                    className="ml-auto p-1 text-gray-500 hover:text-gray-700"
                    onClick={(e) => toggleSubDropdown(product.id, e)}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        showSubDropdown === product.id ? "rotate-90" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {showSubDropdown === product.id && product.subItems && (
                <div className="ml-4 bg-gray-50 rounded">
                  {product.subItems.map((subItem) => (
                    <div
                      key={subItem.id}
                      className="flex gap-2 justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={(e) => selectSubItem(product, subItem, e)}
                    >
                      <span>{subItem.name}</span>
                      <span>{subItem.quantity}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button 
            onClick={handleAddNew}
            className="flex items-center gap-2 w-full p-3 bg-red-100 hover:bg-indigo-100 border-t border-gray-200"
          >
           <img src="/Icones/AddIcone.svg" alt="Add icone" className="w-6" />
            <span>إضافة منتج جديد</span>
          </button>
        </div>
      )}

      {isProductModalOpen && (
        <AddProductModal 
          onClose={() => setIsProductModalOpen(false)}
        />
      )}
    </div>
  );
};