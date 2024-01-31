const BloodDonation = () => {
  return (
    <div>
      <div className=" bg-[#850000] text-white py-6 text-center">
        <h2 className="text-3xl font-semibold">Blood Donation Information</h2>
      </div>

      <div className="container mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Donation Information Items */}
        <div className="p-6 rounded-md transition-transform transform hover:scale-105 duration-300 bg-red-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-white rounded-full">
            🩸
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">What is it?</h3>
          <p className="text-gray-700">
            Blood collected straight from the donor after its donation is
            usually separated into red blood cells, platelets, and plasma.
          </p>
        </div>

        <div className="p-6 rounded-md transition-transform transform hover:scale-105 duration-300 bg-red-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-white rounded-full">
            👤
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Who can donate?
          </h3>
          <p className="text-gray-700">
            To donate, you need to be 18-65 years old, weigh 50kg or more, and
            be fit and healthy.
          </p>
        </div>

        <div className="p-6 rounded-md transition-transform transform hover:scale-105 duration-300 bg-red-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-white rounded-full">
            ⚕️
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">User For?</h3>
          <p className="text-gray-700">
            Donated blood is used for various medical purposes, including
            treating stomach and kidney diseases, childbirth, operations,
            trauma, cancer, and more.
          </p>
        </div>

        <div className="p-6 rounded-md transition-transform transform hover:scale-105 duration-300 bg-red-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-white rounded-full">
            📅
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Lasts For?</h3>
          <p className="text-gray-700">
            Red blood cells can be stored for 42 days.
          </p>
        </div>

        <div className="p-6 rounded-md transition-transform transform hover:scale-105 duration-300 bg-red-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-white rounded-full">
            ⏰
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            How long does it take?
          </h3>
          <p className="text-gray-700">
            It takes approximately 15 minutes to donate blood.
          </p>
        </div>

        <div className="p-6 rounded-md transition-transform transform hover:scale-105 duration-300 bg-red-100">
          <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-white rounded-full">
            📅
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            How often can I donate?
          </h3>
          <p className="text-gray-700">You can donate blood every 12 weeks.</p>
        </div>
      </div>
    </div>
  );
};

export default BloodDonation;
