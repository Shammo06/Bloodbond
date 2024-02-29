import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import ModalOragnization from "./ModalForOrganization";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
export default function Donate() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios
      .get("https://blood-bound.vercel.app/getallcampaigns")
      .then((res) => {
        setCampaigns(res.data.campaigns);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (campaigns.length === 0) {
    return (
      <>
        <div className="w-full h-screen"></div>
      </>
    );
  }

  return (
    <>
      {/* TODO: update the design of donate us page */}
      <h3 className="text-center text-4xl font-bold my-[5rem]">
        Support Us And Make a Difference Today!
      </h3>

      <div className="px-[5rem]">
        <Tabs defaultIndex={0} className={""}>
          <TabList className={"font-bold border-b-2"}>
            <Tab>Donate for campaign</Tab>
            <Tab>Donate of organization</Tab>
          </TabList>
          <TabPanel className={"mt-4"}>
            <div className="flex justify-center gap-6 flex-wrap">
              {campaigns.map((campaign, index) => (
                <Card key={index} campaign={campaign} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>ldkjfsdfasdfa</TabPanel>
        </Tabs>
      </div>
    </>
  );
}

{
  /* overlay div */
}
//  <div className="py-32">
//  <div
//    style={{ boxShadow: "0px 3px 14px 6px rgba(0,0,0,0.28)" }}
//    className="card-body rounded-lg w-[95%] sm:w-3/4 2xl:w-3/5 mx-auto bg-white py-16"
//  >
//    <h3 className="text-center text-4xl font-bold mb-8">
//      Support Us And Make a Difference Today!
//    </h3>

//    <Modal />
//    <ModalOragnization />
//  </div>
// </div>
