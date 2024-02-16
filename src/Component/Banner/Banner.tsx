import { Link } from "react-router-dom";
import heroImage from "../../assets/heroImage.jpg";

const Banner = () => {
  return (
    // <div
    //   className="hero min-h-[calc(100vh-66px)]"
    //   style={{
    //     backgroundImage: `url(${heroImage})`,
    //   }}
    // >
    //   <div className="hero-overlay bg-opacity-30"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-xl">
    //       <h1 className="mb-5 md:text-5xl font-extrabold">
    //         Be a Lifesaver <br />
    //         Donate Blood Today
    //       </h1>
    //       <p className="mb-5 font-semibold">
    //         Join Our Community of Heroes <br /> Every Drop Counts in the Gift of
    //         Life
    //       </p>
    //       <Link to="/donorRegistration">
    //         <button className="btn bg-[#242323] px-4 py-2 hover:bg-[#DC0000] text-white">
    //           Register as Donor
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col-reverse mb-5 md:flex-row">
      <div className="md:w-1/2 flex items-center text-center">
        <div className="max-w-lg mx-auto space-y-5">
          <div className="mb-5 text-3xl md:text-5xl font-bold text-white">
            <h1>Be a Lifesaver</h1>
            <h1>Donate Blood Today</h1>
          </div>
          <p className="mb-5 font-medium text-white">
            Unite in Compassion, Join the Blood Heroes' Movement — Transforming
            Every Donation into a Ray of Hope
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
      <div className="md:w-1/2">
        <img className="rounded-full" src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
