import { NavLink } from "react-router";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-6xl xl:max-w-full  overflow-hidden flex flex-col md:flex-row  rounded-lg">
        {/* Left Side Image */}
        <div className="hidden md:flex  items-center p-6">
          <img
            src="/images/SignInImage.png"
            alt="Dashboard Preview"
            className="w-full rounded-lg  object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo */}
          <div className="flex justify-start mb-14">
            <img
              src="/images/Logo.png" // تأكد من أن المسار صحيح
              alt="Logo"
              className="w-32"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-right text-gray-900">
            تعيين كلمة مرور
          </h2>
          <p className="text-gray-600 text-right mt-2">
            .تم إعادة تعيين كلمة المرور السابقة. يرجى تعيين كلمة مرور جديدة
            لحسابك
          </p>

          {/* Form Fields */}
          <form className="mt-6 space-y-4">
            <input
              type="password"
              placeholder=" انشاء كلمة المرور "
              className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="password"
              placeholder="تاكيد كلمة المرور"
              className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {/* Submit Button */}
            <NavLink to="/signin" className=" hover:text-pink-400">
              <button
                type="submit"
                className="w-full cursor-pointer mt-4 bg-[#FFDDDD]  py-2 rounded-lg hover:bg-pink-300 transition duration-300"
              >
                تعيين كلمة المرور
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
