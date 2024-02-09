const WhyDonateBlood = () => {
  return (
    <div>
      <div className="container mx-auto pt-32 mb-12 lg:mb-0">
        <div className="mb-14">
          <h3 className="text-center text-3xl font-bold mb-4">
            Why Donate <span className="text-red-600">Blood</span>
          </h3>
          <p className="text-center  max-w-[700px] mx-auto text-lg px-5 lg:px-0">
            Be a hero in someone's life – donate blood. Your simple act of
            kindness can save lives and provide hope. Discover the compelling
            reasons behind blood donation and join us in making a difference
            today.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* div for img */}
          <div>
            <img
              src={"https://i.ibb.co/XWJFJxs/why-Choose-Us.png"}
              alt="Img of Blood Donor"
            />
          </div>
          {/* div for texts */}
          <div className="pr-0 lg:pr-5 xl:pr-14 space-y-6 flex flex-col justify-center ">
            <div className="flex">
              <div
                style={{ width: "180px", height: "100px" }}
                className="bg-[#e54a4a]  mr-5 p-5 rounded-full flex justify-center items-center"
              >
                <img
                  className="rounded-full block"
                  src={
                    "https://i.ibb.co/Yj6sSrD/icon-droplet-png-lang-en-US-ext.png"
                  }
                  alt=""
                />
              </div>
              <div className="">
                <h6 className="text-2xl font-semibold mb-4">
                  Impact of Blood Donation
                </h6>
                <p>
                  Donating blood not only saves lives but also improves the
                  donor's cardiovascular health by maintaining iron balance,
                  fostering a sense of community, and contributing to a
                  healthier society overall.
                </p>
              </div>
            </div>
            <div className="flex">
              <div
                style={{ width: "180px", height: "100px" }}
                className="bg-[#e54a4a] mr-5 p-5 rounded-full flex justify-center items-center"
              >
                <img
                  className="rounded-full"
                  src={
                    "https://i.ibb.co/BTt8bR1/icon-group-png-lang-en-US-ext.png"
                  }
                  alt=""
                />
              </div>
              <div className="">
                <h6 className="text-2xl font-semibold mb-4">
                  Advantage of Blood Donation
                </h6>
                <p>
                  Donating blood not only saves lives but also improves the
                  donor's cardiovascular health by maintaining iron balance,
                  fostering a sense of community, and contributing to a
                  healthier society overall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonateBlood;
