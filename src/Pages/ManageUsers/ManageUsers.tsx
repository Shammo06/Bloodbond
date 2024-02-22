import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RiDeleteBin6Line } from "react-icons/ri";

interface User {
    bloodBagDonated: [],
    bloodReq: [],
    campagins: [],
    donoteAmount: [],
    email: string,
    name: string,
    photo: string,
    volunteer: [],
    roll: string,
    __v: number,
    _id: string
}

const ManageUsers: React.FC = () => {

    const axiosPublic = useAxiosPublic();

    const { data: allUsers } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get("/getusers")
            return res.data
        }
    })
    // console.log(allUsers?.users);
    const AllUsers = allUsers?.users

    return (
        <div className="bg-white p-5 border rounded-lg ">
            <h2 className="text-2xl font-semibold border-l-4 border-red-600 pl-2">Manage Users</h2>
            <div className="pt-5">
                <div className="overflow-x-auto">
                    <table className="table static">
                        {/* head */}
                        <thead className="bg-slate-300">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                AllUsers?.map((user: User  ) => 
                            <tr key={user._id}>
                                <td className="text-lg font-semibold">
                                    <div className="avatar static">
                                        <div className="rounded-full w-12 h-12">
                                            <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td>
                                            <button className="btn btn-sm bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white">Admin</button>
                                </td>
                                <td>
                                            <button className="btn btn-sm bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 text-white"><RiDeleteBin6Line className="text-xl" /> Delete</button>
                                </td>
                            </tr>
                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;