import { useParams } from "react-router-dom";
import useUpcomingCampaigns from "../../hooks/useUpcomingCampaigns";
import { Campaign } from "../Campaign/UpcomingCampaigns/UpcomingCampaigns";
import { useEffect, useState } from "react";
import VolunteerRegisterModal from "../../Component/Campaign/VolunteerRegisterModal/VolunteerRegisterModal";
import CampaignCard from "../../Component/Campaign/CampaignCard/CampaignCard";

const CampaignDetails: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const [allCampaigns] = useUpcomingCampaigns();
  const [specificCampaign, setSpecificCampaign] = useState<Campaign | null>(
    null
  );
  const [otherCampaigns, setOtherCampaigns] = useState<Campaign[]>([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const foundCampaign = allCampaigns.find(
      (campaign: Campaign) => campaign.campaignId === id
    );

    if (foundCampaign) {
      setSpecificCampaign(foundCampaign);
    }
  }, [allCampaigns, id, specificCampaign]);

  useEffect(() => {
    const otherCampaigns = allCampaigns.filter(
      (campaign: Campaign) => campaign.campaignId !== id
    );

    if (otherCampaigns.length > 0) {
      setOtherCampaigns(otherCampaigns);
    }
  }, [allCampaigns, id]);

  const { campaignImgUrl, campaignTitle, district, subDistrict, description } =
    specificCampaign ?? {};

  return (
    <div className="grid grid-cols-5 gap-6">
      <div className="col-span-3">
        <div className="bg-[#F1F5F9] shadow-lg rounded-xl mt-14">
          <figure className="relative">
            <img
              className="w-full h-[450px] mx-auto rounded-tl-xl rounded-tr-xl"
              src={campaignImgUrl}
              alt="campaign"
            />
          </figure>
          <div className="md:mt-5 mb-10 pb-8">
            <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
              <div className="mt-3 md:mt-0 px-2 md:px-6 xl:px-8">
                <h2 className="text-2xl font-bold text-[#DC0000]">
                  {campaignTitle}
                </h2>
                <address>
                  {district}, {subDistrict}
                </address>
              </div>
              <div className="bg-[#DC0000] text-white px-5 md:py-2 xl:mr-6 md:mr-4">
                {/* TODO: DYNAMIC DATE */}
                <h4 className="text-lg font-bold">12-Feb-2024</h4>
              </div>
            </div>
            <p className="px-2 md:px-6 xl:px-8 mt-6 text-lg font-medium mb-5">
              {description}
            </p>
            {/* ------------------- buttons ------------------- */}
            <div className="flex flex-col md:flex-row gap-5 px-2 md:px-6 xl:px-8">
              <button
                onClick={openModal}
                className="btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full"
              >
                Register as Volunteer
              </button>
              <div>
                {isModalOpen && (
                  <VolunteerRegisterModal
                    closeModal={closeModal}
                  ></VolunteerRegisterModal>
                )}
              </div>
              <button className="btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] rounded-full">
                Donate for this Camping!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* other campaigns */}
      <div className="col-span-2 p-5">
        <h3 className="text-center text-2xl font-bold my-14">
          Other Upcoming Campaigns
        </h3>
        <div className="grid gap-6">
          {otherCampaigns ? (
            otherCampaigns?.map((campaign: Campaign) => (
              <CampaignCard
                key={campaign.campaignId}
                campaign={campaign}
              ></CampaignCard>
            ))
          ) : (
            <h6>No other campaigns are available.</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
