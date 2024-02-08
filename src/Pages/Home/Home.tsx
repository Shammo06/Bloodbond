import Banner from "../../Component/Banner/Banner";
import BloodDonation from "../../Component/BloodDonation/BloodDonation";
import Mission from "../../Component/Mission/Mission";
import RequestBlood from "../../Component/RequestBlood/RequestBlood";
import Statistics from "../../Component/Statistics/Statistics";
import WhyDonateBlood from "../../Component/WhyDonateBlood/WhyDonateBlood";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="space-y-8 pt-16">
      <Banner></Banner>
      <WhyDonateBlood></WhyDonateBlood>
      <RequestBlood></RequestBlood>
      <BloodDonation></BloodDonation>
      <Statistics></Statistics>
      <Mission></Mission>
      <Contact></Contact>
    </div>
  );
};

export default Home;
