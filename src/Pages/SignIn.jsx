import { NavLink } from "react-router";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-5xl overflow-hidden flex flex-col md:flex-row  rounded-lg">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-6 ">
          <img
            src="/images/LeftSide.png" // تأكد من أن المسار صحيح
            alt="Dashboard Preview"
            className="w-full h-full object-cover rounded-lg"
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
          <h2 className="text-2xl font-bold text-left text-gray-900">
            Get Started Now
          </h2>
          <p className="text-gray-600 mt-2">
            Please enter your information to access your account.
          </p>

          {/* Form Fields */}
          <form className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <NavLink
              to="/ForgotPassword"
              className="text-sm text-[#B1B1B2] hover:text-pink-500"
            >
              Forgot Password?
            </NavLink>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer mt-4 bg-[#FFDDDD]  py-2 rounded-lg hover:bg-pink-300 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-2 text-gray-600">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-4">
            Don&apos;t have an account?
            <NavLink to="/" className=" hover:text-pink-600">
              Signup Free!
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
