// import axios from "axios";
import { useEffect, useState } from "react";

const TopDonor: React.FC = () => {
    interface donor {
        id: number;
        name: string;
        email: string;
        phone: string;
        address: string;
        district: string;
        upazila: string;
        bloodGroup: string;
        photo: string;
      }

    const [donors, setDonors] = useState<donor[]>([])
    useEffect(() => {
        fetch('/Donors.json')
            .then(res => res.json())
            .then((data) => {
                setDonors(data)
                // setDonors(data)
            })
    }, [])
    console.log(donors);

    return (
        <div className="w-3/5 bg-white p-5 border rounded-lg ">
            <h1 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Top Donors</h1>
            <div className=" pt-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Image</th>
                                <th>District</th>
                                <th>Name</th>
                                <th>Blood Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                donors.slice(0,10).map(donor =>  <tr key={donor.id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={donor.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <div className="font-bold">{donor.district}</div>
                                            <div className="text-sm opacity-50">{donor.upazila}</div>
                                        </div>
                                    </td>
                                    <td>
                                        {donor.name}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{donor.email}</span>
                                    </td>
                                    <td>{donor.bloodGroup}</td>
                                    {/* <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th> */}
                                </tr>)
                            }
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TopDonor;