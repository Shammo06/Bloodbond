
const ManageUsers: React.FC = () => {
    return (
        <div className="bg-white p-5 border rounded-lg ">
                <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Manage Users</h2>
            <div className="pt-5">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Campign Name</th>
                                <th>Date</th>
                                <th>Volunteer</th>
                                <th>Donation</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            
                                {/* allCampaigns.map((campaign: Campaign) => ( */}
                                    <tr>
                                        <td className="text-lg font-semibold">
                                            {/* {campaign?.title} */}
                                        </td>
                                        <td>
                                            {/* {campaign?.startDate} */}
                                        </td>
                                        <td>
                                            {/* {campaign?.volunteer?.length} */}
                                        </td>
                                        <td>
                                            {/* {campaign?.donationAmount?.length} */}
                                        </td>
                                        <td>
                                            {/* <button onClick={() => hendelCampaignDelete(campaign._id)} className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white"><RiDeleteBin6Line className="text-xl" /> Delete</button> */}
                                        </td>
                                    </tr>
                                {/* )) */}
                            




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;