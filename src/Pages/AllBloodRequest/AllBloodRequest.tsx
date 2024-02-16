import React, { useEffect, useState } from "react";
import axios from "axios";

interface BloodRequest {
  patientName: string;
  bloodGroup: string;
  bloodBag: number;
  time: string;
  location: string;
  phone: number;
  _id: string;
}

const RequestBlood: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[][]>([]);

  useEffect(() => {
    axios
      .get("https://blood-bound.vercel.app/getbloodrequests")
      .then((data) => {
        setRequests(data.data.bloodRequests);
      });
  }, []);

  return (
    <div className="section-donate-blood my-10">
      <div className="space-y-4">
        <p className="bg-[#850000] text-3xl font-semibold text-white py-6 text-center">
          All Blood Request
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {requests.map((bloodGroupRequests, index) =>
            bloodGroupRequests.map((data) => (
              <div
                key={index}
                className="bg-white p-6 rounded-md border border-gray-300 shadow-md"
              >
                <div className="text-center text-xl font-bold text-[#850000] mb-4">
                  {data.bloodGroup} BLOOD REQUIRED
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="font-bold">Patient Name</div>
                    <div className="text-left pl-2">{data.patientName}</div>
                  </div>

                  <div className="flex items-center">
                    <div className="font-bold">Blood Group</div>
                    <div className="text-left pl-2">{data.bloodGroup}</div>
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
                    <div className="text-left pl-2">{data.location}</div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <button className="py-2 px-6 bg-[#ea062b] text-white rounded-md hover:bg-red-800 transition duration-300">
                    Donate Blood
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
