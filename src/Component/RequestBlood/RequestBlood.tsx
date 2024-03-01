import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DonateBlood from "../DonateBlood/DonateBlood";
import Container from "../Container/Container";

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
  const [requests, setRequests] = useState<BloodRequest[]>([]);

  useEffect(() => {
    axios
      .get("https://blood-bound.vercel.app/getbloodrequests")
      .then((res) => {
        setRequests(res.data.bloodRequests);
      });
  }, []);

  return (
    <div className="bg-gray-200 section-donate-blood py-10">
      <Container>
        <div className="space-y-4 px-4 md:px-0">
          <p className=" text-3xl font-semibold py-6 text-center">
            Donate Your Blood
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:px-10">
            {requests.slice(0, 2).map((bloodGroupRequests, index) =>
              <DonateBlood key={index} data={bloodGroupRequests}></DonateBlood>
            )}
          </div>
          <div className="pt-5 text-center">
            <Link to="/allrequest">
              <button className="py-2 px-6 bg-[#ea062b] text-white rounded-md hover:bg-red-800 transition duration-300">
                All Blood Request
              </button>
            </Link>
          </div>
        </div>
      </Container>

    </div>
  );
};

export default RequestBlood