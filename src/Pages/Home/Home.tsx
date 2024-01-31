import Banner from "../../Component/Banner/Banner";
import BloodDonation from "../../Component/BloodDonation/BloodDonation";
import RequestBlood from "../../Component/RequestBlood/RequestBlood";
import Statistics from "../../Component/Statistics/Statistics";
import WhyDonateBlood from "../../Component/WhyDonateBlood/WhyDonateBlood";

const Home = () => {
  return (
    <div className="space-y-8">
      <Banner></Banner>
      <WhyDonateBlood></WhyDonateBlood>
      <RequestBlood></RequestBlood>
      <BloodDonation></BloodDonation>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
