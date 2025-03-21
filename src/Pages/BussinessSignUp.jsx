import FileUpload from "./../Components/FileUpload";

const BussinessSignUp = () => {
  return (
    <>
      {/* Form Fields */}
      <form className="mt-6 space-y-4">
        <select
          className="w-full bg-transparent focus:outline-none px-4 py-2 text-gray-600 border rounded-lg pr-2"
          placeholder="Entity Classification"
        >
          <option value="Entity Classification">Entity Classification</option>
        </select>
        <input
          type="text"
          placeholder="Commercial Registration Number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="Tax Number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <div className="flex items-center  ">
          <div className="flex items-center mr-2">
            <input
              type="email"
              placeholder="http://"
              className="bg-transparent focus:outline-none px-4 py-2 text-gray-600 border rounded-lg pr-2"
            />
          </div>

          <input
            type="text"
            placeholder="Website Link"
            className="w-full focus:outline-none border rounded-lg px-4 py-2"
          />
        </div>

        <select
          className="w-full bg-transparent focus:outline-none px-4 py-2 text-gray-600 border rounded-lg pr-2"
          placeholder="Store Platform"
        >
          <option value="Store Platform">Store Platform</option>
        </select>

        <FileUpload />
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FFDDDD] text-gray-900 py-2 rounded-lg hover:bg-pink-300 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default BussinessSignUp;
