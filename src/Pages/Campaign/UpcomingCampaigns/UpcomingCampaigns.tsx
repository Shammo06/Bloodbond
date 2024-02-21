import SingleCampaign from "../../../Component/Campaign/SingleCampaign/SingleCampaign";
import useUpcomingCampaigns from "../../../hooks/useUpcomingCampaigns";

export interface Campaign {
  _id: string;
  photo: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  division: string;
  district: string;
  subDistrict: string;
}

const UpcomingCampaigns: React.FC = () => {
  const [allCampaigns, isLoading] = useUpcomingCampaigns();

  return (
    <div className="py-24">
      <h1 className="text-3xl text-center text-white font-extrabold mb-16">
        Upcoming Campaign
      </h1>
      {/* upcoming campaigns */}

      {isLoading ? (
        <div className="container mx-auto py-8">
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-white"></span>
          </div>
        </div>
      ) : (
        <div>
          {allCampaigns && allCampaigns.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 xl:gap-6 px-2">
                {allCampaigns?.map((campaign: Campaign) => (
                  <SingleCampaign
                    key={campaign._id}
                    campaign={campaign}
                  ></SingleCampaign>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-center font-semibold text-white">
                No Campaigns Available
              </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UpcomingCampaigns;
