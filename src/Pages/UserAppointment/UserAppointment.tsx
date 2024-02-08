
const UserAppointment: React.FC = () => {
    return (
        <div className="bg-white p-5 border rounded-lg ">
        <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">All Medical Test</h2>
        <div className="pt-4">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className=" bg-slate-300 ">
                        <tr>
                            <th>Test Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        <tr>
                            <td className="text-lg font-semibold">
                                Blood group Test
                            </td>
                            <td>
                                tk 50
                            </td>
                            <td>
                                Panding/Confirm
                            </td>
                            <td>
                                12-2-2024
                            </td>
                            <td>
                                <button className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-lg font-semibold">
                                Blood group Test
                            </td>
                            <td>
                                tk 50
                            </td>
                            <td>
                                Panding/Confirm
                            </td>
                            <td>
                                12-2-2024
                            </td>
                            <td>
                                <button className="btn bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default UserAppointment;