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
    if (allCampaigns) {
      const foundCampaign = allCampaigns.find(
        (campaign: Campaign) => campaign._id === id
      );
      if (foundCampaign) {
        setSpecificCampaign(foundCampaign);
      }
      const otherCampaigns = allCampaigns.filter(
        (campaign: Campaign) => campaign._id !== id
      );
      if (otherCampaigns.length > 0) {
        setOtherCampaigns(otherCampaigns);
      }
    }
  }, [allCampaigns, id]);

  const { photo, title, district, subDistrict, description, startDate } =
    specificCampaign ?? {};

  const [year, month, date] = startDate?.split("-") ?? [];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 py-14">
      <div className="lg:col-span-3 px-5 lg:px-0 lg:pl-5">
        {specificCampaign && (
          <>
            <div className="bg-[#F1F5F9] shadow-lg rounded-xl">
              <figure className="relative">
                <img
                  className="w-full h-auto mx-auto rounded-tl-xl rounded-tr-xl"
                  src={photo}
                  alt="campaign"
                />
              </figure>
              <div className="md:mt-5 mb-10 pb-8">
                <div className="flex flex-col-reverse md:flex-row justify-between md:items-start">
                  <div className="mt-3 md:mt-0 px-2 md:px-6 xl:px-8">
                    <h2 className="text-2xl font-bold text-[#DC0000]">
                      {title}
                    </h2>
                    <address>
                      {district}, {subDistrict}
                    </address>
                  </div>
                  <div className="bg-[#DC0000] text-white px-5 md:py-2 xl:mr-6 md:mr-4 flex-shrink-0">
                    <h4 className="text-lg font-bold text-center">
                      {date}-{month && months[parseInt(month) - 1]}-{year}
                    </h4>
                  </div>
                </div>
                <p className="px-2 md:px-6 xl:px-8 mt-6 text-lg font-medium mb-5">
                  {description}
                </p>
                {/* ------------------- buttons ------------------- */}
                <div className="flex flex-col md:flex-row gap-5 px-2 md:px-6 xl:px-8">
                  <button
                    onClick={openModal}
                    className="btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] px-9"
                  >
                    Register as Volunteer
                  </button>
                  <div>
                    {isModalOpen && specificCampaign && (
                      <VolunteerRegisterModal
                        campaign={specificCampaign}
                        closeModal={closeModal}
                      ></VolunteerRegisterModal>
                    )}
                  </div>
                  <button className="btn btn-outline bg-[#DC0000] text-white hover:text-[#DC0000] hover:bg-white hover:border-[#DC0000] px-9">
                    Donate for this Camping!
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* other campaigns */}
      <div className="lg:col-span-2 px-5 lg:pl-0">
        <h3 className="text-center text-2xl font-bold mb-14 text-white">
          Other Upcoming Campaigns
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          {otherCampaigns.length > 0 ? (
            otherCampaigns?.map((campaign: Campaign) => (
              <CampaignCard
                key={campaign._id}
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
