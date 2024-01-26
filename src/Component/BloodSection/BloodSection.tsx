import bloodBag from "../../assets/bloodbag.jpeg";
import donatedBlood from "../../assets/blooddonated.webp";

const BloodSection = () => {
  return (
    <div className="md:flex space-x-5">
      <img src={bloodBag} alt="" />
      <img src={donatedBlood} alt="" />
    </div>
  );
};

export default BloodSection;
