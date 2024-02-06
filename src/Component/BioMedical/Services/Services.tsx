import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

interface Service {
  testName: string;
  testDescription: string;
  testPrice: string;
  imageUrl: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Service[]>(
          "/public/Bio-MedicalServices.json"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container mx-auto my-24">
        <h3 className="font-bold text-center text-4xl mb-16">
          Our Bio-Medical Services
        </h3>
        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
