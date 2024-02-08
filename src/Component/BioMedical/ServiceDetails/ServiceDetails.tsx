import { useParams } from "react-router-dom";
// import ServiceBookModal from "../ServiceBookModal/ServiceBookModal";
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface Service {
//   testId: string;
//   testName: string;
//   testDescription: string;
//   testPrice: string;
//   imageUrl: string;
// }

const ServiceDetails = () => {
  const { id } = useParams();

  // const [services, setServices] = useState<Service[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get<Service[]>(
  //         "/public/Bio-MedicalServices.json"
  //       );
  //       setServices(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const service = services.filter((service) => service.testId === id);
  // const serviceToSend = service[0];
  return (
    <div>
      This is service details page. and the id is {id}
      {/* {service && <ServiceBookModal service={serviceToSend}></ServiceBookModal>} */}
    </div>
  );
};

export default ServiceDetails;
