import useUpcomingCampaigns from "../../hooks/useUpcomingCampaigns";
import CampaignBanner from "./CampaignBanner/CampaignBanner";
import UpcomingCampaigns from "./UpcomingCampaigns/UpcomingCampaigns";

const Campaign = () => {
  const [allCampaigns] = useUpcomingCampaigns();
  console.log(allCampaigns);

  return (
    <div className="pt-16">
      <CampaignBanner></CampaignBanner>
      <UpcomingCampaigns></UpcomingCampaigns>
    </div>
  );
};

export default Campaign;
