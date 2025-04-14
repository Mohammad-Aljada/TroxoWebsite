import { NavLink } from "react-router";

const PersonalSignUp = () => {
  return (
    <div className="mt-6">
      {/* Form Fields */}
      <form className="space-y-5">
        {/* اسم الأول واسم العائلة في صف واحد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="الاسم الأول"
              className="w-full px-4 py-3 border  rounded-lg text-right "
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="اسم العائلة"
              className="w-full px-4 py-3 border  rounded-lg text-right "
              required
            />
          </div>
        </div>

        {/* البريد الإلكتروني */}
        <div>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full px-4 py-3 border  rounded-lg text-right "
            required
          />
        </div>

        {/* رقم الهاتف */}
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-1/3">
            <select
              className="w-full px-4 py-3 border  rounded-lg text-right focus:ring-2 "
              required
            >
              <option value="+966">🇸🇦 +966</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
          </div>
          <div className="w-full md:w-2/3">
            <input
              type="tel"
              placeholder="5×× ××× ×××"
              className="w-full px-4 py-3 border  rounded-lg text-right "
              pattern="[0-9]{9,15}"
              required
            />
          </div>
        </div>

        {/* كلمة المرور */}
        <div>
          <input
            type="password"
            placeholder="كلمة المرور"
            className="w-full px-4 py-3 border  rounded-lg text-right"
            minLength="8"
            required
          />
        </div>

        {/* تأكيد كلمة المرور */}
        <div>
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            className="w-full px-4 py-3 border  rounded-lg text-right "
            minLength="8"
            required
          />
        </div>

        {/* شروط الخصوصية */}
        <div className="flex items-center justify-end gap-3">
          <label htmlFor="terms" className="text-gray-600 text-sm text-right">
            أوافق على{" "}
            <NavLink to="/terms" className="text-red-500 hover:underline">
              الشروط
            </NavLink>{" "}
            و
            <NavLink to="/privacy" className="text-red-500 hover:underline">
              {" "}
              سياسة الخصوصية
            </NavLink>
          </label>
          <input
            type="checkbox"
            id="terms"
            className="w-5 h-5 accent-red-200 rounded "
            required
          />
        </div>

        {/* زر التالي */}
        <NavLink to="/BussinessSignUp" className="block">
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#FFDDDD] text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            الخطوة التالية
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default PersonalSignUp;
