import { NavLink, Outlet } from "react-router";
const TamplateSignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-6">
          <img
            src="/images/LeftSide.png"
            alt="Dashboard Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo */}
          <div className="flex justify-start mb-6">
            <img
              src="/images/Logo.png"
              alt="Logo"
              className="w-32"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-left text-gray-900">
            Sign Up to
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Please enter your information to access your account.
          </p>

          <Outlet />
          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-2 text-gray-600">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Already have an account */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?
            <NavLink to="/signin" className="cursor-pointer">
              Log In
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TamplateSignUp;
