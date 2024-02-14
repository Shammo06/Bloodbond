import CampaignBanner from "./CampaignBanner/CampaignBanner";
import UpcomingCampaigns from "./UpcomingCampaigns/UpcomingCampaigns";

const Campaign = () => {
  return (
    <div className="pt-16">
      <CampaignBanner></CampaignBanner>
      <UpcomingCampaigns></UpcomingCampaigns>
    </div>
  );
};

export default Campaign;
