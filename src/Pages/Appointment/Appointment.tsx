
const Appointment = () => {
    return (
        <div className="bg-white p-5 border rounded-lg ">
            <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">All Appointment</h2>
            <div className="pt-4">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className=" bg-slate-300 ">
                            <tr>
                                <th>Name</th>
                                <th>District</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            <tr>
                                <td className="text-lg font-semibold">
                                    Rabin
                                </td>
                                <td>
                                    Barishal
                                </td>
                                <td>
                                    mdrabin@gmail.com
                                </td>
                                <td>
                                    12-2-2024
                                </td>
                                <td>
                                    <button className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Approve</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-lg font-semibold">
                                    Rabin
                                </td>
                                <td>
                                    Barishal
                                </td>
                                <td>
                                    mdrabin@gmail.com
                                </td>
                                <td>
                                    12-2-2024
                                </td>
                                <td>
                                    <button className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Approve</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Appointment;