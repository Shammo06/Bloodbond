// import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";


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
                const res = await axios.post('https://blood-bound.vercel.app/getuser',user?.email );
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
                <img className="rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocI_TANKTkI5I1N8bwkdhTFoUVf4QjMMCFK9Mbefmb8mEw=s96-c?fbclid=IwAR0lRM-0IyzsBzFR0UvVrAwcPbDl9MAkBjXDk64y7iUeyZqd3VxwZfchGAY" alt="" />
                <div className="space-y-3">
                    <h4 className="text-2xl font-semibold">MR Shammo</h4>
                    <p className="font-semibold text-black opacity-80">mrshammo2018@gmail.com</p>
                    <p></p>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Profile;