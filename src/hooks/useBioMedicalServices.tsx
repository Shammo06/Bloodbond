import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";
import axios from "axios";

const useBioMedicalServices = () => {
  // const axiosPublic = useAxiosPublic();

  const {
    data: allBioMedicalServices = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bioMedicalServices"],
    queryFn: async () => {
      const res = await axios.get(
        `https://blood-server-2.vercel.app/getBiomedical`
      );

      return res.data;
    },
  });

  return [allBioMedicalServices, isLoading, refetch];
};

export default useBioMedicalServices;
