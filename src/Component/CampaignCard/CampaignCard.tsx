// import { Link } from "react-router-dom";
import { Campaign } from "../../Pages/Campaign/UpcomingCampaigns/UpcomingCampaigns";
import React from "react";

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const {
    campaignImgUrl,
    campaignTitle,
    district,
    subDistrict,
    description,
    startDate,
  } = campaign;

  const wordsPerDescription = 18;
  const slicedDescription = description
    .split(" ")
    .slice(0, wordsPerDescription)
    .join(" ");

  const [, month, date] = startDate.split("-");

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
    <div className="bg-slate-100 p-4 space-y-2 rounded-xl duration-500 border-b-4 border-[#F1F5F9]  hover:border-[#ea062b]">
      <div className="relative">
        <img className="h-[210px] w-full" src={campaignImgUrl} alt="" />
        <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
          <h4 className="text-lg font-bold">{date}</h4>
          <h5>{months[parseInt(month) - 1]}</h5>
        </div>
      </div>
      <address>
        {district}, {subDistrict}
      </address>
      <h2 className="text-2xl font-bold text-[#ea062b]">{campaignTitle}</h2>
      <p>
        {description.length > wordsPerDescription
          ? slicedDescription
          : description}
      </p>
    </div>
  );
};

export default CampaignCard;
