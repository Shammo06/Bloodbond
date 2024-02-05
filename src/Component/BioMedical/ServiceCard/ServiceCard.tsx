interface Service {
  testName: string;
  testDescription: string;
  testPrice: string;
  imageUrl: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  if (!service) {
    return;
  }

  const { imageUrl, testName } = service;

  return (
    <div>
      <img className="w-full h-[200px]" src={imageUrl} alt={`Image for ${testName}`} />
    </div>
  );
};

export default ServiceCard;
