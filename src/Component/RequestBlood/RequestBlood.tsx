import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface FormData {
  patientName: string;
  bloodGroup: string;
  bloodBag: number;
  time: string;
  location: string;
  phone: number;
  _id: string;
}

const RequestBlood = () => {
  const [request, setRequest] = useState<FormData[]>([]);

  useEffect(() => {
    axios
      .get("https://blood-bound.vercel.app/getbloodrequests")
      .then((data) => {
        setRequest(data.data.bloodRequests);
        console.log(data.data);
      });
  }, []);
  return (
    <div className="mt-10">
      <div className=" space-y-4 ">
        <p className="bg-[#850000] text-3xl font-semibold text-white py-6 text-center">
          Donate Your Blood
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {request?.slice(0, 2).map((data) => (
            <div
              key={data._id}
              className="card bg-[#FEE2E2] font-mono shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{data.bloodGroup} Blood Needed</h2>
                <p>Patient Name: {data.patientName}</p>
                <p>Blood Need: {data.bloodBag} Bag</p>
                <p>Donation Time: {data.time}</p>
                <p>Location: {data.location}</p>
                <p>Contact: {data.phone}</p>
                <div className="card-actions my-2 ">
                  <button className="btn btn-outline bg-[#ea062b] px-4 py-2 text-white">
                    Donate Blood
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-5 text-center">
        <Link to="/allrequest">
            <button className="btn btn-outline px-4 py-2 bg-[#DC0000] text-white">
              All Donor Request
            </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
