import { NavLink } from "react-router";

const PersonalSignUp = () => {
  return (
    <>
      {/* Form Fields */}
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="اسم الاول"
          className="w-full px-4 py-2 border rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="text"
          placeholder="اسم العائلة"
          className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="البريد الالكتروني"
          className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <div className="flex items-center  ">
          <div className="flex items-center mr-2">
            <select className="bg-transparent focus:outline-none px-4 py-2 text-gray-600 border rounded-lg pr-2">
              <option value="+966"> 🇸🇦 +966</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
          </div>

          <input
            type="phone"
            placeholder="xxxx xxx x5"
            className="w-full focus:outline-none border text-right rounded-lg px-4 py-2"
          />
        </div>

        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="password"
          placeholder="تاكيد كلمة المرور"
          className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <div className="flex justify-end items-right space-x-2 ">
          <label htmlFor="terms" className="text-gray-600 text-sm text-right">
            أوافق على <span className="text-[#EE3F36] text-right">الشروط</span>و
            <span className="text-[#EE3F36] text-right">السياسة الخصوصية</span>
          </label>
          <input type="checkbox" id="terms" className="w-4 h-4 " />
        </div>

        {/* Submit Button */}

        <NavLink to="/BussinessSignUp">
          <button
            type="submit"
            className="w-full bg-[#FFDDDD] text-gray-900 py-2 rounded-lg hover:bg-pink-300 transition duration-300"
          >
            خطوة التالية
          </button>
        </NavLink>
      </form>
    </>
  );
};

export default PersonalSignUp;
