const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center p-6">
          <img
            src="../../public/images/LeftSide.png"
            alt="Dashboard Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          {/* Logo */}
          <div className="flex justify-start mb-6">
            <img
              src="../../public/images/Logo.png"
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

          {/* Form Fields */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                type="text"
                placeholder="5x xxx xxxx"
                className="w-full focus:outline-none border rounded-lg px-4 py-2"
              />
            </div>

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I agree with <span className="text-[#EE3F36]">Terms</span> and{" "}
                <span className="text-[#EE3F36]">Privacy Policy</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FFDDDD] text-gray-900 py-2 rounded-lg hover:bg-pink-300 transition duration-300"
            >
              Next Step
            </button>
          </form>
          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-2 text-gray-600">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Already have an account */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <span className=" cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
