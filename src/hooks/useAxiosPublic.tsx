import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://blood-bound.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
