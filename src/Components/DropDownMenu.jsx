/* eslint-disable react/prop-types */
import { useState } from "react";
import AddStoreModal from "./Modal/AddStoreModal";
import AddClientModal from './Modal/AddClientModal';

const DropdownMenu = ({ options, placeholder, title, icon, onSelect, modalToOpen = "store" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  const handleAddNew = () => {
    if (onSelect) onSelect("new");
    setIsOpen(false);
    setActiveModal(modalToOpen); // استخدام القيمة المحددة مسبقاً
  };
 

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );

    if (onSelect) {
      onSelect(option);
    }
  };

  const getDisplayText = () => {
    if (selectedOptions.length === 0) return placeholder;
    if (selectedOptions.length === 1) return selectedOptions[0];
    return `${selectedOptions.length} ${title} مختارة`;
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <img
              src={icon}
              alt=""
              className="w-5 h-5 object-contain"
              aria-hidden="true"
            />
          )}
          <span className={selectedOptions.length === 0 ? "text-zinc-400" : "text-blue-950"}>
            {getDisplayText()}
          </span>
        </div>

        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
              onClick={() => toggleOption(option)}
              role="option"
              aria-selected={selectedOptions.includes(option)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
                className="h-4 w-4 text-indigo-600 rounded border-gray-300 mr-3"
              />
              <span className="flex-1 text-right">{option}</span>
            </div>
          ))}

          <button
            className="flex items-center gap-2 w-full px-4 py-2.5 border-t border-gray-200 bg-red-100 hover:bg-gray-100 text-neutral-600"
            onClick={handleAddNew}
          >
            <img src="/Icones/AddIcone.svg" alt="add icon" className="w-5 h-5" />
            <span>إضافة {title} جديد</span>
          </button>
        </div>
      )}

      {activeModal === 'store' && <AddStoreModal onClose={() => setActiveModal(null)} />}
      {activeModal === 'client' && <AddClientModal onClose={() => setActiveModal(null)} />}
    </div>
  );
};

export default DropdownMenu;