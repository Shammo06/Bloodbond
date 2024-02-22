import { RiDeleteBin6Line } from "react-icons/ri";

const VolunteerManage = () => {
    return (
        <div className="bg-white p-5 border rounded-lg ">
            <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Volunteer Manage</h2>
            <div className="pt-5">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th>Campign Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            <tr>
                                <td className="text-lg font-semibold">
                                    LifeSaver Blood Donation Drive
                                </td>
                                <td>
                                    Rabin
                                </td>
                                <td>
                                    mdrabin@gmail.com
                                </td>
                                <td>
                                    Barishal
                                </td>
                                <td>
                                    01700008888
                                </td>
                                <td>
                                    <button className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white"><RiDeleteBin6Line className="text-xl" /> Delete</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VolunteerManage;