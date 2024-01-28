import axios from "axios";
import { useEffect, useState } from "react";
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
    <div className="mt-28">
      <div className="px-20 bg-[#F9E1DE] py-32">
        <p className="text-3xl font-bold text-center mb-14">
          Donate Your Blood
        </p>
        <div className="grid grid-cols-2 gap-5">
          {request?.slice(0, 2).map((data) => (
            <div key={data._id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{data.bloodGroup} Blood Needed</h2>
                <p>Patient Name: {data.patientName}</p>
                <p>Blood Need: {data.bloodBag} Bag</p>
                <p>Donation Time: {data.time}</p>
                <p>Location: {data.location}</p>
                <p>Contact: {data.phone}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline">Donate Blood</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
