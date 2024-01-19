const Banner = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto space-y-5">
        <h2 className=" text-2xl md:text-5xl font-bold ">
          Donate Blood, Save Lives Today!
        </h2>
        <p>
          Welcome to our blood donation website. Join us in making a difference
          by donating blood and helping those in need.
        </p>
        <div className="space-x-3">
          <button className="btn btn-outline">Register as Donor</button>
          <button className="btn btn-outline">Find Donor</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
