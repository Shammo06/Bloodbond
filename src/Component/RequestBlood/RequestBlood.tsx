import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  const [requests, setRequests] = useState<BloodRequest[]>([]);

  useEffect(() => {
    axios
      .get("https://blood-bound.vercel.app/getbloodrequests")
      .then((response) => {
        const currentDate = new Date();
        const filteredRequests = response.data.bloodRequests
          .flat()
          .filter(
            (request: BloodRequest) => new Date(request.time) > currentDate
          )
          .splice(0, 2);
        setRequests(filteredRequests);
      })
      .catch((error) => {
        console.error("Error fetching blood requests:", error);
      });
  }, []);

  const handleDonateBlood = (phone: number) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="section-donate-blood mt-10">
      <div className="space-y-4">
        <p className="bg-[#850000] text-3xl font-semibold text-white py-6 text-center">
          Donate Your Blood
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {requests.map((data, index) => (
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
                  <div className="font-bold">Donation Date</div>
                  <div className="pl-2">
                    {new Date(data.time).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="font-bold">Location</div>
                  <div className="text-left pl-2">{data.location}</div>
                </div>

                <div className="flex items-center">
                  <div className="font-bold">Phone</div>
                  <div className="text-left pl-2">{data.phone}</div>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  className="py-2 px-6 bg-[#ea062b] text-white rounded-md hover:bg-red-800 transition duration-300"
                  onClick={() => handleDonateBlood(data.phone)}
                >
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-5 text-center">
          <Link to="/allrequest">
            <button className="py-2 px-6 bg-[#DC0000] text-white rounded-md hover:bg-red-800 transition duration-300">
              All Donor Request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
