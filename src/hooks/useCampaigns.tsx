import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCampaigns = () => {
  const {
    data: allCampaigns = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allCampaigns"],
    queryFn: async () => {
      const res = await axios.get(`/public/campaignFakeData.json`);
      return res.data;
    },
  });

  return [allCampaigns, isLoading, refetch];
};

export default useCampaigns;
