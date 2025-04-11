import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import WelcomeModal from "../../Components/Modal/WelcomeModal";

const SignIn = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const navigate = useNavigate();

  const onSignInClick = (e) => {
    e.preventDefault();
    navigate("/home", { state: { showWelcomeModal: true } });
  };

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
        <div className="w-full flex flex-col items-center mt-20 md:w-1/2 p-8">
          {/* Logo */}

          {/* Title */}
          <h2 className="text-2xl font-bold text-right text-gray-900">
            ابدأ الآن
          </h2>
          <p className="text-gray-600 text-right mt-2">
            . يرجى إدخال معلوماتك للوصول إلى حسابك
          </p>

          {/* Form Fields */}
          <form className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="password"
              placeholder="ادخل كلمة المرور"
              className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <NavLink
              to="/forgetpassword"
              className="text-sm text-[#B1B1B2] text-right hover:text-pink-500"
            >
              نسيت كلمة المرور؟
            </NavLink>
            {/* Submit Button */}
            <NavLink to="/home" className=" hover:text-pink-400">
              <button
                onClick={onSignInClick}
                type="submit"
                className="w-full cursor-pointer mt-4 bg-[#FFDDDD]  py-2 rounded-lg hover:bg-pink-300 transition duration-300"
              >
                تسجيل الدخول
              </button>
            </NavLink>
          </form>
          {showWelcomeModal && (
            <WelcomeModal onClose={() => setShowWelcomeModal(false)} />
          )}

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-2 text-gray-600">أو</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-4">
            لا تملك حسابًا؟
            <NavLink to="/" className=" hover:text-pink-600">
              سجل مجانا
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
