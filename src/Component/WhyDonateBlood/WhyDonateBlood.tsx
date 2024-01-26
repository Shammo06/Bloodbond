const WhyDonateBlood = () => {
  return (
    <div>
      <div className="container mx-auto pt-32">
        <div className="mb-14">
          <h3 className="text-center text-3xl font-bold mb-4">
            Why Donate Blood
          </h3>
          <p className="text-center  max-w-[700px] mx-auto text-lg px-5 lg:px-0">
            Be a hero in someone's life – donate blood. Your simple act of
            kindness can save lives and provide hope. Discover the compelling
            reasons behind blood donation and join us in making a difference
            today.
          </p>
        </div>
        <div>
          {/* div for img */}
          <div>
            <img
              src={"https://i.ibb.co/379Mhqw/donor-purple-circle.png"}
              alt="Img of Blood Donor"
            />
          </div>
          {/* div for texts */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonateBlood;
