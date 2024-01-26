import Banner from "../../Component/Banner/Banner";
import RequestBlood from "../../Component/RequestBlood/RequestBlood";
import Statistics from "../../Component/Statistics/Statistics";
import WhyDonateBlood from "../../Component/WhyDonateBlood/WhyDonateBlood";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RequestBlood></RequestBlood>
      <WhyDonateBlood></WhyDonateBlood>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
