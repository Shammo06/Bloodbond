import React from 'react';
import useUpcomingCampaigns from "../../hooks/useUpcomingCampaigns";

interface Volunteer {
    name: string;
    email: string;
    address: string;
    phone: string;
    _id: string; // Assuming it's a string, adjust accordingly
}

interface Campaign {
    _id: string;
    title: string;
    volunteer: Volunteer[];
}

const VolunteerManage: React.FC = () => {
    const [allCampaigns] = useUpcomingCampaigns();

    console.log(allCampaigns)

    const handleClick = (id: string) => {
        console.log(id);
        // refetch()
    }

    return (
        <div className="bg-white p-5 border rounded-lg ">
            <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Volunteer Manage</h2>
            <div className="pt-5">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Campaign Name</th>                                
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th>Delete</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {allCampaigns.map((data: Campaign) => (
                                data.volunteer.length > 0 ? (
                                    <tr key={data._id}>
                                        <td rowSpan={data.volunteer.length} className="text-lg font-semibold">
                                            {data.title}
                                        </td>
                                        {data.volunteer.map((item: Volunteer) => (
                                            <tr>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.email}
                                                </td>
                                                <td>
                                                    {item.address}
                                                </td>
                                                <td>
                                                    {item.phone}
                                                </td>
                                                <td>
                                                    <button onClick={() => handleClick(item._id)}>Delete</button>
                                                </td>
                                                </tr>
                                        ))}
                                    </tr>
                                ) : null
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VolunteerManage;
