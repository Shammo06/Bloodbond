import axios from "axios";
import { useEffect, useState } from "react";
import { TbDropletHeart } from "react-icons/tb";

interface BloodRequest {
  _id: string;
  time: string;
  location: string;
  patientName: string;
  bloodGroup: string;
  bloodBag: number;
  phone: string;
}

const AllBloodRequest: React.FC = () => {
  const [allRequest, setAllRequest] = useState<BloodRequest[]>([]);

  useEffect(() => {
    axios.get<{ bloodRequests: BloodRequest[] }>('https://blood-bound.vercel.app/getBloodRequests')
      .then(res => setAllRequest(res.data.bloodRequests));
  }, []);

  console.log(allRequest);

  return (
    <div className="py-10">
      <h2 className="text-5xl font-bold text-center p-4">All Blood Request</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {allRequest.map(request => (
          <div key={request._id} className="group">
            <div className="p-6 rounded-lg space-y-2 shadow-2xl bg-top hover:bg-bottom group-hover:text-white group-hover:bg-red-600 ease-out duration-500">
              <div className="flex justify-between items-center">
                <div className="bg-red-500 p-4 rounded-full inline-block">
                  <span className="text-7xl text-white"><TbDropletHeart /></span>
                </div>
                <p>Date: {request.time}</p>
              </div>
              <h3 className="text-xl font-bold">{request.location}</h3>
              <h5 className="text-base font-bold text-gray-600 group-hover:text-gray-200 duration-500">Patient Name: {request.patientName}</h5>
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <p className="text-red-600 group-hover:text-white duration-500">Blood Group: <span className="font-bold">{request.bloodGroup}</span></p>
                  <p>Blood Need:{request.bloodBag} Bag</p>
                </div>
              </div>
              <p>Contuct: {request.phone}</p>
              <div className="card-actions my-2 ">
                  <button className="btn btn-outline bg-[#ea062b] px-4 py-2 text-white">
                    Donate Blood
                  </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBloodRequest;
