import { Link } from "react-router-dom";
import bloodDonating from "../../assets/donatingBlood.jpeg";

const Banner = () => {
  return (
    <div className="md:flex space-x-3 items-center space-y-3">
      <div className="md:w-1/2">
        <img src={bloodDonating} alt="" />
      </div>
      <div className="space-y-5 md:w-1/2">
        <h2 className=" text-3xl lg:text-5xl font-bold ">
          Donate <span className="text-red-500">Blood</span>, Save{" "}
          <span className="text-green-500">Lives</span> Today!
        </h2>
        <p className="md:text-lg font-semibold">
          Welcome to our blood donation website. Join us in making a difference
          by donating blood and helping those in need.
        </p>
        <div className="space-x-3">
          <Link to="/donorRegistration">
            <button className="btn btn-outline">
              Register as{" "}
              <span className="text-red-500 font-semibold">Donor</span>
            </button>
          </Link>
          <Link to="/donorSearch">
            <button className="btn btn-outline">
              Search <span className="text-red-500 font-semibold">Donor</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
