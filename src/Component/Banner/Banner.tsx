import { Link } from "react-router-dom";
import bloodDonating from "../../assets/donatingBlood.jpeg";

const Banner = () => {
  return (
    <div className="md:flex space-x-3 items-center space-y-3 pt-5 ">
      <div className="md:w-1/2">
        <img src={bloodDonating} alt="" />
      </div>
      <div className="space-y-5 md:w-1/2">
        <h2 className=" text-3xl lg:text-5xl font-bold ">
          Donate <span className="text-red-600">Blood</span>, Save{" "}
          <span className="text-green-600">Lives</span> Today!
        </h2>
        <p className="md:text-lg font-semibold">
          Welcome to our blood donation website. Join us in making a difference
          by donating blood and helping those in need.
        </p>
        <div className="md:space-x-5 font-medium space-x-[1px] text-center">
          <Link to="/donorRegistration">
            <button className="btn btn-outline px-4 py-2 bg-[#ea062b] text-white">
              Register as Donor
            </button>
          </Link>
          <Link to="/donorSearch">
            <button className="btn btn-outline px-4 py-2 bg-[#ea062b] text-white">
              Search Donor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
