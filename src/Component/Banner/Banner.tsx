import { Link } from "react-router-dom";
import heroImage from "../../assets/heroImage.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto mt-10 mb-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-6 mx-2">
        <div className="flex items-center text-center">
          <div className="max-w-lg mx-auto space-y-5">
            <div className="mb-5 text-3xl md:text-5xl font-bold text-white">
              <h1>Be a Lifesaver</h1>
              <h1>Donate Blood Today</h1>
            </div>
            <p className="mb-5 font-medium text-white">
              Unite in Compassion, Join the Blood Heroes' Movement —
              Transforming Every Donation into a Ray of Hope
            </p>
            <div className="space-x-5">
              <Link to="/donorRegistration">
                <button className="btn  bg-yellow-400  ">
                  Register as Donor
                </button>
              </Link>
              <Link to="/donorSearch">
                <button className="btn hover:bg-slate-600 hover:text-white">
                  Search Donor
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <img className="rounded-full max-h-[550px]" src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
