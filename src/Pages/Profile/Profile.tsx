// import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const Profile: React.FC = () => {

    const axiosPublic = useAxiosPublic(); 
    const auth = useAuth(); 

    useEffect(() => {
        if (!auth) {
            
            return;
        }

        const { user } = auth;

        const fetchData = async () => {
            try {
                const res = await axiosPublic.get('/users',  {email: user?.email} );
                console.log(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [auth, axiosPublic]);


    // const axiosPublic = useAxiosPublic();
    // const auth = useAuth();
  
    // if (!auth) {
    //   return;
    // }
  
    // const { user } = auth;
    // const { data } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         // const res = await axiosPublic.get("/getuser");
    //         // return res.data;
    //         const res = await axiosPublic.get(`/users/${user?.email}`);
            
    //         return res.data;
    //     }
    // })

    // console.log(data);

    return (
        <div className="bg-white p-5 border rounded-lg">
            <div className=" max-w-3xl mx-auto  flex items-center gap-10">
                <img className="rounded-full" src="https://i.ibb.co/8z9kWW2/user2.jpg" alt="" />
                <div className="space-y-3">
                    <h4 className="text-2xl font-semibold">Mr. Rubel Hosen</h4>
                    <p className="font-semibold text-black opacity-80">rubenhosen@gmail.com</p>
                    <p></p>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Profile;