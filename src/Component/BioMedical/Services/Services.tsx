import axios from "axios";
import { useEffect, useState } from "react";

interface Service {
  testName: string;
  testDescription: string;
  testPrice: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Service[]>(
          "/public/campaignFakeData.json"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(services);

  return (
    <div>
      <div className="container mx-auto my-24">
        <h3 className="font-bold text-center text-3xl mb-16">
          Our Bio-Medical Services
        </h3>
        {/* services */}
        <div></div>
      </div>
    </div>
  );
};

export default Services;
