import ServiceCard from "../ServiceCard/ServiceCard";
import useBioMedicalServices from "../../../hooks/useBioMedicalServices";

interface Service {
  _id: string;
  testId: string;
  testName: string;
  testDescription: string;
  testPrice: string;
  imageUrl: string;
}

const Services: React.FC = () => {
  const [allBioMedicalServices] = useBioMedicalServices();

  return (
    <div>
      <div className="container mx-auto my-24">
        <h3 className="font-bold text-center text-4xl mb-16">
          Our Bio-Medical Services
        </h3>
        {/* services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allBioMedicalServices.map((service: Service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
