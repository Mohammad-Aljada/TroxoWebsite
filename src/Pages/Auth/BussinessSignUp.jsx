import { NavLink } from "react-router";
import FileUpload from "../../Components/FileUpload";

const BussinessSignUp = () => {
  return (
    <>
      {/* Form Fields */}

      <form className="mt-6 space-y-4">
        <select
          className="w-full bg-transparent  focus:outline-none px-4 py-2 text-gray-600 border rounded-lg pr-2"
          placeholder="Entity Classification"
        >
          <option value="Entity Classification">تصنيف الكيان</option>
        </select>
        <input
          type="text"
          placeholder="رقم السجل التجاري"
          className="w-full px-4 py-2 border text-right rounded-lg "
        />
        <input
          type="text"
          placeholder="رقم الضريبة"
          className="w-full px-4 py-2 border text-right rounded-lg "
        />

        <div className="flex items-center  ">
          <div className="flex items-center mr-2">
            <input
              type="text"
              placeholder="http://"
              className="bg-transparent focus:outline-none px-4 py-2 text-gray-600 border rounded-lg pr-2"
            />
          </div>

          <input
            type="text"
            placeholder="رابط الموقع"
            className="w-full focus:outline-none text-right border rounded-lg px-4 py-2"
          />
        </div>

        <select
          className="w-full bg-transparent focus:outline-none px-4 py-2 text-gray-600 border rounded-lg pr-2"
          placeholder="Store Platform"
        >
          <option value="Store Platform">منصة المتجر</option>
        </select>

        <FileUpload />
        <div className="flex justify-between  max-md:flex-col gap-2">
          <NavLink to="/">
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#FFDDDD] text-gray-900 px-12 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              الخطوة السابقة
            </button>
          </NavLink>
          <NavLink to="/otp">
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#FFDDDD] text-gray-900 px-12 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              انشاء حساب
            </button>
          </NavLink>
        </div>
        {/* Submit Button */}
      </form>
    </>
  );
};

export default BussinessSignUp;
