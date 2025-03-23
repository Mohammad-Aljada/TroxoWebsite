import { NavLink } from "react-router";

const ConfirmEmail = () => {
  return (
    <div className="flex  items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-5xl overflow-hidden flex flex-col md:flex-row  rounded-lg">
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
            تحقق من الرمز{" "}
          </h2>
          <p className="text-gray-600 text-right mt-2">
            .تم إرسال رمز التحقق إلى بريدك الإلكتروني
          </p>

          {/* Form Fields */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="أدخل الرمز"
              className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <NavLink
              to=""
              className="text-sm text-[#B1B1B2] text-right hover:text-pink-500"
            >
              لم تتلقَ رمزًا؟ أعد الإرسال
            </NavLink>
            {/* Submit Button */}
            <NavLink to="/ResetPassword" className=" hover:text-pink-400">
              <button
                type="submit"
                className="w-full cursor-pointer mt-4 bg-[#FFDDDD]  py-2 rounded-lg hover:bg-pink-300 transition duration-300"
              >
                تحقق
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
