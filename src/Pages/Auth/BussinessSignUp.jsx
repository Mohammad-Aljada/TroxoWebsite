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
          className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="text"
          placeholder="رقم الضريبة"
          className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
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
        {/* Submit Button */}
        <NavLink to="/signIn">
          <button
            type="submit"
            className="w-full bg-[#FFDDDD] text-gray-900 py-2 rounded-lg hover:bg-pink-300 transition duration-300"
          >
            انشاء حساب
          </button>
        </NavLink>
      </form>
    </>
  );
};

export default BussinessSignUp;
