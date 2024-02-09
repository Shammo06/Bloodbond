import { Link } from "react-router-dom";
import group from "../../assets/cm1.jpg";




const CampaignCard = () => {
  return (
    <Link to="/campaignDetails"><div className="bg-slate-100 p-4 max-w-[540px] space-y-2 rounded-xl duration-500 border-b-4 border-white  hover:border-[#ea062b]">
    <div className="relative">
      <img className="h-[210px] w-full" src={group} alt="" />
      <div className="absolute top-0 left-0  bg-[#ea062b] py-3 px-4 text-white">
        <h4 className="text-lg font-bold">12</h4>
        <h5>Feb</h5>
      </div>
    </div>
    <address>Dhanmondi, Dhaka</address>
    <h2 className="text-2xl font-bold text-[#ea062b]">
    LifeSaver Blood Donation Drive
    </h2>
    <p>
      Blood group collection involves determining an individual's blood
      type to facilitate safe blood transfusions and medical procedures.
    </p>
  </div></Link>
  );
};

export default CampaignCard;