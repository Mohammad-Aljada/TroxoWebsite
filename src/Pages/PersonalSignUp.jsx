import { NavLink } from "react-router";

const PersonalSignUp = () => {
  return (
    <>
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
            I agree with <span className="text-[#EE3F36]">Terms</span> and
            <span className="text-[#EE3F36]">Privacy Policy</span>
          </label>
        </div>

        {/* Submit Button */}

        <NavLink to="/BussinessSignUp">
          <button
            type="submit"
            className="w-full bg-[#FFDDDD] text-gray-900 py-2 rounded-lg hover:bg-pink-300 transition duration-300"
          >
            Next Step
          </button>
        </NavLink>
      </form>
    </>
  );
};

export default PersonalSignUp;
