import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useChat = () => {
    const { refetch, data: data = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async() => {
            const res = await axios.get("https://blood-server-2.vercel.app/getCommunityChat");
            return res.data;
        }
    })

    return [data, refetch]
};

export default useChat;