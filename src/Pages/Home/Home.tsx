import Banner from "../../Component/Banner/Banner";
import BloodSection from "../../Component/BloodSection/BloodSection";
import RequestBlood from "../../Component/RequestBlood/RequestBlood";
import Statistics from "../../Component/Statistics/Statistics";
import WhyDonateBlood from "../../Component/WhyDonateBlood/WhyDonateBlood";

const Home = () => {
  return (
    <div className="space-y-5 md:mt-5">
      <Banner></Banner>
      <BloodSection></BloodSection>
      <WhyDonateBlood></WhyDonateBlood>
      <Statistics></Statistics>
      <RequestBlood></RequestBlood>
    </div>
  );
};

export default Home;
