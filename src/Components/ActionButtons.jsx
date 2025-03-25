export const ActionButtons = ({ icon, children, variant = "default" }) => {
  const baseClasses =
    "flex overflow-hidden flex-col justify-center items-center px-1 py-1 rounded-lg min-h-12 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]";
  const variantClasses = {
    default: "bg-pink-950 bg-opacity-10",
    outline: "bg-white border border-solid border-zinc-200",
    primary: "bg-red-100",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="flex overflow-hidden gap-2 items-start px-3 py-2.5 rounded-lg border border-solid border-pink-950 min-h-10">
        {icon && (
          <img
            src={icon}
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
        )}
        <span className="text-base font-medium tracking-tight leading-none text-center text-pink-950">
          {children}
        </span>
      </div>
    </div>
  );
};

export const FilterButton = () => (
  <button className="flex overflow-hidden flex-col justify-center items-center py-1 pr-3 pl-2 text-sm tracking-normal text-gray-800 whitespace-nowrap bg-white rounded-md border border-solid border-zinc-200">
    <div className="flex overflow-hidden gap-2 items-start">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d19776e767cbc9bb9255b105a223d12f9cb67065?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <span>فلتر</span>
    </div>
  </button>
);

export const ExcelButton = () => (
  <button className="flex overflow-hidden flex-col justify-center items-center py-1 pr-3 pl-2 text-sm font-semibold bg-red-100 rounded-md text-pink-950">
    <div className="flex overflow-hidden gap-2 items-start">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3f85110c62af82b4b7e4f4196af15b9a5526846?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <span>ملف إكسل</span>
    </div>
  </button>
);

export const AddProductButton = () => (
  <button className="flex overflow-hidden flex-col justify-center items-center py-1 pr-3 pl-2 text-xs font-medium tracking-normal bg-red-100 rounded-md text-pink-950">
    <div className="flex overflow-hidden gap-2 items-start">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e95660b64d80ec70fafcd1a47dbccf9a97e8de4?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <span>إضافة منتج</span>
    </div>
  </button>
);
