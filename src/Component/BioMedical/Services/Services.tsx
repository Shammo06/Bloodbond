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
  const [allBioMedicalServices, isLoading] = useBioMedicalServices();

  return (
    <div>
      <div className="container mx-auto my-24">
        <h3 className="font-bold text-center text-4xl mb-16 mx-4">
          Our Bio-Medical Services
        </h3>

        {/* services */}
        {isLoading ? (
          <div className="container mx-auto py-8">
            <div className="flex justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </div>
        ) : (
          <div>
            {allBioMedicalServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 xl:gap-6 px-2">
                {allBioMedicalServices?.map((service: Service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>
                ))}
              </div>
            ) : (
              <div>
                <h2 className="text-center font-semibold">
                  No Services Available
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
