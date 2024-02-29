import React from "react";
import { Link } from "react-router-dom";
import useAllBloodRequests from "../../hooks/useAllBloodRequests";

interface BloodRequest {
  patientName: string;
  bloodGroup: string;
  bloodBag: string;
  time: string;
  location: string;
  phone: string;
  _id: string;
}

const RequestBlood: React.FC = () => {
  const [allBloodRequests, isLoading] = useAllBloodRequests();
  console.log(allBloodRequests, isLoading);

  return (
    <div className="container mx-auto section-donate-blood mt-10">
      <div className="space-y-4">
        <p className="bg-[#850000] text-3xl font-semibold text-white py-6 text-center">
          Donate Your Blood
        </p>
        <div>
          {isLoading ? (
            <div className="container mx-auto py-12">
              <div className="flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-white"></span>
              </div>
            </div>
          ) : (
            <div>
              {allBloodRequests && allBloodRequests.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-5 px-5">
                  {allBloodRequests.length > 0 &&
                    allBloodRequests.slice(0, 2).map((data: BloodRequest) => (
                      <div
                        key={data._id}
                        className="bg-white p-6 rounded-md border border-gray-300 shadow-md"
                      >
                        <div className="text-center text-xl font-bold text-[#850000] mb-4">
                          {data.bloodGroup} BLOOD REQUIRED
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center">
                            <div className="font-bold">Patient Name</div>
                            <div className="text-left pl-2">
                              {data.patientName}
                            </div>
                          </div>

                          <div className="flex items-center">
                            <div className="font-bold">Blood Group</div>
                            <div className="text-left pl-2">
                              {data.bloodGroup}
                            </div>
                          </div>

                          <div className="flex items-center">
                            <div className="font-bold">Need No. Of Bags</div>
                            <div className="pl-2">{data.bloodBag} Bag</div>
                          </div>

                          <div className="flex items-center">
                            <div className="font-bold">Donation Time</div>
                            <div className="pl-2">{data.time}</div>
                          </div>

                          <div className="flex items-center">
                            <div className="font-bold">Location</div>
                            <div className="text-left pl-2">
                              {data.location}
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-6">
                          <button className="py-2 px-6 bg-[#ea062b] text-white rounded-md hover:bg-red-800 transition duration-300">
                            Donate Blood
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div>
                  <h2 className="text-center font-semibold text-white">
                    No Blood Request Available
                  </h2>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="pt-5 text-center">
          <Link to="/allrequest">
            <button className="py-2 px-6 bg-[#DC0000] text-white rounded-md hover:bg-red-800 transition duration-300">
              All Blood Request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
